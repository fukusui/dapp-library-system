import { Component } from '@angular/core';
import { BookService } from '../../shared/book.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {
	books;
	bookData;
  constructor(private book: BookService) { }

  getBooks(evt) {
    this.books = evt;
    delete this.bookData;
  }

	selectBook(evt) {
		this.bookData = evt;
		delete this.books;
	}

}
