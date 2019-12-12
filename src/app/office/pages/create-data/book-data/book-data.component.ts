import { Component, EventEmitter, Input, Output, OnChanges } from '@angular/core';
import { BookDataService } from '../../../services/bookData.service';
import { OfficeService } from '../../../services/office.service';

@Component({
  selector: 'book-data',
  templateUrl: './book-data.component.html',
  styleUrls: ['./book-data.component.sass']
})
export class BookDataComponent implements OnChanges {
  @Input() bookData;
	@Output() alertEvent = new EventEmitter();
  authors;
	book;
  constructor(private bookInfo: BookDataService,
    private office: OfficeService) { }

	ngOnChanges() {
		let bookInfo = this.bookData.volumeInfo;
    if(bookInfo.industryIdentifiers[0].identifier){
      this.book = this.bookInfo.sort(bookInfo);
      this.authors = this.book.savedAuthors;
    } else {
      this.book = null;
    }
	}

	saveBook () {
    this.office.saveBook(this.bookInfo.data)
			.subscribe(data => {
    		this.alertEvent.emit();
				delete this.book;
		});
  }

}
