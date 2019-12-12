import { Component, EventEmitter, Input, OnChanges, Output  } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.sass']
})
export class BookComponent implements OnChanges {
	@Input() bookData;
	@Output() instanceEvent = new EventEmitter();
  constructor(private book: BookService) { }

	ngOnChanges() {
    if(this.bookData.genre) {
      this.bookData.genreName = [];
      for(let genre of this.bookData.genre) {
        this.book.genre(genre).subscribe(data => {
          this.bookData.genreName.push(data);
        });
			}
		}
    this.book.instance({book: this.bookData._id})
      .subscribe(data => {
        if(data.length>0) {
          this.bookData.instances = data;
        }
    	});
  	}

	instanceSelect(instance) {
    this.instanceEvent.emit(instance);
  }
}
