import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OfficeService } from '../../services/office.service';
import { LibService } from '../../services/librarian.service';

const headerLinks = [
  { name: "Add Data", url: "/office/create-data"},
  { name: "Add Book", url: "/office/create-book"},
  { name: "CheckInOut", url: "/office/checkinout"},
  { name: "Employee", url: "/office/employee"},
  { name: "Home", url: "/"}
]

@Component({
  selector: 'app-office-home',
  templateUrl: './office-home.component.html',
  styleUrls: ['./office-home.component.sass']
})
export class OfficeHomeComponent {
  links = headerLinks;
  constructor(private office: OfficeService,
    private router: Router, private libService: LibService) {
  }

  logout() {
    this.office.logout();
  }
}
