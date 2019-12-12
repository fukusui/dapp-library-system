import { Injectable } from '@angular/core';
import { Router, CanActivateChild } from '@angular/router';
import { LibService } from '../services/librarian.service';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class LibGuard implements CanActivateChild {

  constructor(private libService: LibService, private router: Router) {}

  canActivateChild(): Observable<boolean> {
		return this.libService.auth$.pipe(
			map(data => {
				if(data >= 1) {
					return true;
				} else {
      		this.router.navigateByUrl('office/login');
					return false;
				}
			}),
		)
	}

}
