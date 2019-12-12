import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BookService } from '../book.service';

@Component({
  selector: 'search-title',
  templateUrl: './search-title.component.html',
  styleUrls: ['./search-title.component.sass']
})
export class SearchTitleComponent {
  @Output() addBookEvent = new EventEmitter();
	titleForm;

  constructor(private formBuilder: FormBuilder,
    private book: BookService) {
    this.titleForm = this.formBuilder.group({
      title: '',
    });
  }

	onSubmit() {
    this.book.check(this.titleForm.value).subscribe(data => {
      if(data.length>0) {
        this.addBookEvent.emit(data);
      }
    });
  	this.titleForm.reset();
  }
}
