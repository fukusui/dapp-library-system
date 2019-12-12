import { Component, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BookService } from '../../../shared/book.service';
import { OfficeService } from '../../services/office.service';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.sass']
})
export class CreateBookComponent {
	books;
	bookData;
	instanceForm;
  alertMessage;
  bookNumber: number;
  constructor(private book: BookService,
		private office: OfficeService,
		private formBuilder: FormBuilder) {
      this.instanceForm = this.formBuilder.group({
        quantity: '',
    });
	}

  getBooks(evt) {
		this.books = evt;
    delete this.bookData;
    delete this.alertMessage;
  }

	bookEvent(e) {
		this.bookData = e;
	}

	onSubmit() {
    let bookInstance = {
      book: this.bookData._id,
      availability: "available"
    }
    this.bookNumber = this.instanceForm.value.quantity;
    for (let i = 0; i< this.instanceForm.value.quantity; i++) {
      this.office.saveInstance(bookInstance).subscribe(data => {
        console.log(data);
      });
    }
    this.alertMessage = true;
    this.instanceForm.reset();
    delete this.bookData;
  }

}
