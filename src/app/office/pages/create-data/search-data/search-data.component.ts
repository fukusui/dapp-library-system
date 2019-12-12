import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { BookService } from '../../../../shared/book.service';

@Component({
  selector: 'search-data',
  templateUrl: './search-data.component.html',
  styleUrls: ['./search-data.component.sass']
})
export class SearchDataComponent {
	@Output() dataEvent = new EventEmitter();
  bookForm;
  books;

  constructor(private formBuilder: FormBuilder, private book: BookService) {
    this.bookForm = this.formBuilder.group({
      title: '',
      author:''
    });
  }

	onSubmit() {
		let searchData = this.bookForm.value.title + '+inauthor:'+this.bookForm.value.author;
    this.book.search(searchData).subscribe(data => {
      this.books = data.items;
    })
    this.bookForm.reset();
  }

	selectData(book) {
  	this.dataEvent.emit(book);
    delete this.books;
	}

}
