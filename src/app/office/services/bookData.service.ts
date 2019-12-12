import { Injectable } from '@angular/core';
import { BookService } from '../../shared/book.service';

@Injectable()
export class BookDataService {
	data = {
		title: "",
		authors: [],
		genres: [],
		isbn: "",
		img: "",
    saved: null,
    savedAuthors: []
  }
  constructor(private book: BookService) {}

  sort(book) {
    this.data.title = book.title;
    this.getISBN(book.industryIdentifiers[0].identifier);
    this.data.img = book.imageLinks.smallThumbnail;
		this.getAuthor(book.authors);
		this.getGenre(book.categories);
    return this.data;
  }

  private getISBN(isbn) {
    if (isbn) {
      this.data.isbn = isbn;
      this.checkBookExist(isbn);
    }
  }

  private checkBookExist (isbn) {
    this.book.check({isbn: isbn})
      .subscribe(data => {
        if(data.length >= 1) {
          this.data.saved = true;
        } else {
          this.data.saved = false;
        }
      });}

  private getAuthor(authors){
    this.data.authors = [];
    this.data.savedAuthors = [];
    if(authors) {
      this.sortName(authors);
      this.searchAuthor(this.data.authors);
    }}

  private getGenre(genres) {
    this.data.genres = [];
    if(genres) {
      for (let genre of genres) {
				this.data.genres.push(genre);
		  }}}

	private sortName(authors) {
    for (let author of authors) {
      let splitName = author.split(/[ ,]+/);
      if (splitName.length === 3) {
        let name = {first_name: splitName[0],
          middle_name: splitName[1], last_name: splitName[2]}
        this.data.authors.push(name);
      } else if (splitName.length === 2) {
        let name = {first_name: splitName[0], last_name: splitName[1]}
        this.data.authors.push(name);
      } else if (splitName.length === 1 || splitName.length >= 4) {
        this.data.authors.push(name);
      } else {
        let name = {first_name: author};
        this.data.authors.push(name);
      }}}

  private searchAuthor(authors) {
    for (let author of authors) {
      this.book.searchAuthor(author).subscribe(data => {
        if(data.length>0){
          this.data.savedAuthors.push(data[0]);
        }});}}
}
