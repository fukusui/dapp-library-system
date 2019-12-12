import { Component, OnInit } from '@angular/core';
import { LibService } from '../../services/librarian.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.sass']
})
export class EmployeeComponent implements OnInit {
  employees;
  constructor(private libService: LibService) { }

  ngOnInit() {
  	this.loadEmployee();
	}

  registerEmp(employee) {
		this.libService.addEmployee(employee.address)
			.subscribe(data => this.loadEmployee());
  }

	addAdmin(employee) {
		this.libService.addAdmin(employee.address)
			.subscribe(data => this.loadEmployee());
	}

	deleteEmp(employee) {
		this.libService.deleteEmp(employee.address)
			.subscribe(data => this.loadEmployee());
	}

	loadEmployee() {
   	this.libService.combinedData()
      .subscribe(data => this.employees = data);
	}

}
