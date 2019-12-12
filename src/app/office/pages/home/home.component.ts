import { Component } from '@angular/core';
import { LibService } from '../../services/librarian.service';
import { Router } from '@angular/router';

const links = [
  { name: "Add Data", url: "/office/create-data"},
  { name: "Add Book", url: "/office/create-book"},
  { name: "CheckInOut", url: "/office/checkinout"},
  { name: "Employee", url: "/office/employee"},
]

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {
  officeLinks = links;
  constructor(private router: Router,
    private libService: LibService) {
    // this.libService.auth().subscribe((data) => {
    //   if (data === 0) {
    //     this.router.navigateByUrl('office/login');
    //   }
    // });
  }
}
