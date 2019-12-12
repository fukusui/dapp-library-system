import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { OfficeService } from '../../../services/office.service';

@Component({
  selector: 'search-users',
  templateUrl: './search-users.component.html',
  styleUrls: ['./search-users.component.sass']
})
export class SearchUsersComponent {
	@Output() usersEvent = new EventEmitter();
  userForm;
  constructor(private office: OfficeService,
		private formBuilder: FormBuilder) {
		this.userForm = this.formBuilder.group({
			first: '',
			last:''
    });
  }

  onSubmit() {
    let user = ({name: {
      last: this.userForm.value.last,
      first: this.userForm.value.first}
    });
    this.office.searchUser(user).subscribe(data => {
      if(data.length>0){
				this.usersEvent.emit(data);
      }
    });
    this.userForm.reset();
  }
}
