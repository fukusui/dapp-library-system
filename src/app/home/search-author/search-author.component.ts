import { Component, EventEmitter, Output} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BookService } from '../../shared/book.service';

@Component({
  selector: 'search-author',
  templateUrl: './search-author.component.html',
  styleUrls: ['./search-author.component.sass']
})
export class SearchAuthorComponent {
  @Output() addBookEvent = new EventEmitter();
  authorForm;
  constructor(private formBuilder: FormBuilder,
		private book: BookService) {
    this.authorForm = this.formBuilder.group({
      first_name: '',
      last_name:''
    });
  }

  onSubmit() {
		this.book.searchAuthor(this.authorForm.value)
			.subscribe(authors =>{
      if(authors.length>0) {
        for (let data of authors) {
          this.book.check({author: data._id}).subscribe(data => {
						if(data.length>0) {
              this.addBookEvent.emit(data);
						}
					});}}
			});
 		this.authorForm.reset();
  }

}
