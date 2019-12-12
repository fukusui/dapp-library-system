import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { LibService } from '../services/librarian.service';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class LibNonGuard implements CanActivate {

  constructor(private libService: LibService, private router: Router) {}

  canActivate(): Observable<boolean> {
		return this.libService.auth$.pipe(
			map(data => {
				if(data >= 1) {
          this.router.navigateByUrl('office');
					return false;
				} else {
					return true;
				}
			}),
		)
	}
}
