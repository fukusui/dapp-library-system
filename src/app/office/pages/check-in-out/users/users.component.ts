import { Component, EventEmitter, Input, Output } from '@angular/core';
import { OfficeService } from '../../../services/office.service';

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass']
})
export class UsersComponent {
  @Input() users;
	@Output() userEvent = new EventEmitter();
  constructor(private office: OfficeService) { }

  selectUser(user) {
  	this.userEvent.emit(user);
	}

}
