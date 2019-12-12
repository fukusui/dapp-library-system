import { Component, EventEmitter, Output, Input} from '@angular/core';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass']
})
export class UserComponent {
  @Input() user;
	@Output() returnEvent = new EventEmitter();
  constructor() {}

  isRed(dueDate) {
    let date = new Date();
    if (dueDate > date) {
      return true;
    } else {
      return false;
    }
  }

	returnBook(book) {
    let bookInstance = book.instance;
    this.returnEvent.emit(bookInstance);
  }

}
