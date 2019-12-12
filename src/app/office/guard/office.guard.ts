import { Injectable } from '@angular/core';
import { Router, CanActivateChild } from '@angular/router';
import { OfficeService } from '../services/office.service';

@Injectable()
export class OfficeGuard implements CanActivateChild {

  constructor(private office: OfficeService, private router: Router) {}

  canActivateChild() {
    if (!this.office.isLoggedIn()) {
      this.router.navigateByUrl('office/login');
      return false;
    }
    return true;
  }
}
