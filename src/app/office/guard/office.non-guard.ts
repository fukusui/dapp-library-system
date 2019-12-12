import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { OfficeService } from '../services/office.service';

@Injectable()
export class OfficeNonGuard implements CanActivate {

  constructor(private office: OfficeService, private router: Router) {}

  canActivate() {
    if (this.office.isLoggedIn()) {
      this.router.navigateByUrl('office');
      return false;
    }
    return true;
  }
}
