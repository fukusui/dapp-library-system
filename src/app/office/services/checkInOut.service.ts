import { Injectable } from '@angular/core';
import { Observable, combineLatest, from, interval, of, Subject, throwError } from 'rxjs';
import { map, mergeMap, shareReplay, switchMap, tap, toArray, filter, share, distinctUntilChanged, catchError } from 'rxjs/operators';

import { BookService } from '../../shared/book.service';
import { OfficeService } from './office.service';

@Injectable()
export class CheckInOutService {

  constructor(private book: BookService,
    private office: OfficeService) {}

	barrow(book, user): Observable<any> {
		let newDate = this.dueDate();
		let updateData = {
			id: book._id, availability: "lent",
      due_date: newDate,
      current_barrower: user._id,
      past_barrower: user._id
    };
	  let updateUser = {id: user._id, instanceId: book._id};
    return combineLatest(this.office.instanceCheckout(updateData),
			this.office.userCheckout(updateUser));
	}

	private dueDate() {
		let today = new Date();
		let newDate = new Date();
		newDate.setDate(today.getDate()+12);
		return newDate;
	}

  getBooks(user): Observable<any> {
		return from(user.due_books).pipe(
      mergeMap((id: any) =>
        this.book.instanceId(id).pipe(
		    mergeMap((bookInstance: any) =>
          this.book.getById(bookInstance.book),
          (original, detail) => ({book: detail, instance: original}),
    	)))
			);
	}

  returnBook(bookInstance, user): Observable<any> {
  	let returnData = {id: bookInstance._id, availability: "available"};
    let returnUser = {id: user._id, due_books: bookInstance._id};
  	return this.office.instanceReturn(returnData).pipe(
			switchMap(() => this.office.userReturn(returnUser))
		);
	}
}
