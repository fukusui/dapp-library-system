import { Component, EventEmitter, Input, Output, OnChanges } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.sass']
})
export class BooksComponent implements OnChanges {
  @Input() books;
  @Output() bookEvent = new EventEmitter();

  constructor(private book: BookService) { }

  ngOnChanges() {
    for(let book of this.books) {
      for(let author of book.author) {
        this.book.searchAuthor({_id: author}).subscribe(data => {
          book.authorName = data;
        });}}
  }

	selectBook(book) {
		this.bookEvent.emit(book);
		delete this.books;
	}

}
