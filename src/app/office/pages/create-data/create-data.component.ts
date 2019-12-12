import { Component } from '@angular/core';

@Component({
  selector: 'app-create-data',
  templateUrl: './create-data.component.html',
  styleUrls: ['./create-data.component.sass']
})
export class CreateDataComponent {
	alertMessage;
  bookData;
  constructor() { }

  dataEvent(e) {
    this.bookData = e;
  	delete this.alertMessage;
	}

	alertEvent() {
		this.alertMessage = true;
	}

}
