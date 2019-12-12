import { Component, Input } from '@angular/core';
import { BookDataService } from '../../../services/bookData.service';

@Component({
  selector: 'check-author',
  templateUrl: './check-author.component.html',
  styleUrls: ['./check-author.component.sass']
})
export class CheckAuthorComponent {
  @Input()authors;
  constructor(private bookInfo: BookDataService) { }

  replace(author) {
    this.bookInfo.data.authors.splice(
			this.bookInfo.data.authors.indexOf(author), 1);
    this.bookInfo.data.authors.push(author);
    this.authors.splice(this.authors.indexOf(author), 1);
  }

}
