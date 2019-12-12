import { Component } from '@angular/core';
import { BookService } from '../../../shared/book.service';
import { CheckInOutService } from '../../services/checkInOut.service';

@Component({
  selector: 'app-check-in-out',
  templateUrl: './check-in-out.component.html',
  styleUrls: ['./check-in-out.component.sass']
})
export class CheckInOutComponent {
  users;
	user;
	books;
	bookData;
  constructor(private checkInOut: CheckInOutService,
    private book: BookService) { }

  getUsers(users) {
    this.users = users;
  	delete this.user;
		delete this.bookData;
	}

	getUser(user) {
		this.userData(user);
    delete this.users;
	}

	getBooks(books) {
		this.books = books;
	}

	bookEvent(book) {
		this.bookData = book;
		this.bookData.checkout = true;
	}

	selectInstance(book) {
		this.checkInOut.barrow(book, this.user)
			.subscribe(([book, user]) => {
        this.userData(user);
        this.book.getById(book.book)
          .subscribe(data => delete this.bookData);
      });
	}

  returnBook(bookInstance) {
    this.checkInOut.returnBook(bookInstance, this.user)
			.subscribe(data => this.userData(data));
  }

	private userData(user) {
		if(user.due_books.length > 0) {
      user.books = [];
      this.checkInOut.getBooks(user)
				.subscribe((data) => {user.books.push(data)});
			this.user = user;
		} else {
			this.user = user;
		}
	}




}
