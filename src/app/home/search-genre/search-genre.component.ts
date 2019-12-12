import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { BookService } from '../../shared/book.service';

@Component({
  selector: 'search-genre',
  templateUrl: './search-genre.component.html',
  styleUrls: ['./search-genre.component.sass']
})
export class SearchGenreComponent implements OnInit {
  @Output() addBookEvent = new EventEmitter();
  genre;
  genres;
  constructor(private book: BookService) { }

  ngOnInit() {
    this.book.genres().subscribe(genres => {
      this.genres = genres;
    });
  }

  searchGenre() {
    if(this.genre){
      this.book.check({genre: this.genre}).subscribe(data => {
        if(data.length>0) {
          this.addBookEvent.emit(data);
        }
     });}}
}
