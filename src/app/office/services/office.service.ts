import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';

export interface UserDetails {
  _id: string;
  exp: number;
  iat: number;
}

interface TokenResponse {
  token: string;
}

export interface TokenPayload {
  email: string;
  password: string;
  name?: string;
}

@Injectable()
export class OfficeService {
  private token: string;
	private apiUrl = environment.apiUrl;
  selected;

	httpOptions = {
		headers: new HttpHeaders({
			'Content-Type':  'application/json',
			'Authorization': `Bearer ${this.getToken()}`
		})
	};

  constructor(private http: HttpClient, private router: Router) {}

  // Admin Authentication
  private saveToken(token: string): void {
    localStorage.setItem('admin-token', token);
    this.token = token;
  }

  private getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem('admin-token');
    }
    return this.token;
  }

  public getAdminDetails(): UserDetails {
    const token = this.getToken();
    let payload;
    if (token) {
      payload = token.split('.')[1];
      payload = window.atob(payload);
      return JSON.parse(payload);
    } else {
      return null;
    }
  }

  public isLoggedIn(): boolean {
    const admin = this.getAdminDetails();
    if (admin) {
      return admin.exp > Date.now() / 1000;
    } else {
      return false;
    }
  }

  public logout(): void {
    this.token = '';
    window.localStorage.removeItem('admin-token');
    this.router.navigateByUrl('office/login');
  }

  public login(admin: TokenPayload): Observable<any> {
		return this.http.post(this.apiUrl+'office/login', admin).pipe(
			map((data: TokenResponse) => {
				if (data.token) {
					this.saveToken(data.token);
				}
				return data;
			}))
	}

  public profile(): Observable<any> {
    return this.http.get(this.apiUrl+'office/profile', this.httpOptions);
  }

  //Get Admin Data
  public getAdmins(): Observable<any> {
    return this.http.get(this.apiUrl+'office/employee', this.httpOptions);
  }

  public getAdmin(id): Observable<any> {
    return this.http.get(this.apiUrl+'office/employee/'+id, this.httpOptions);
  }

  //Book Services
  public saveBook(book): Observable<any> {
    return this.http.post(this.apiUrl+'book/create', book, this.httpOptions);
  }

  public saveInstance(instance): Observable<any> {
    return this.http.post(this.apiUrl+'book_instance/create', instance, this.httpOptions);
  }

  public searchUser(query): Observable<any> {
    return this.http.post(this.apiUrl+'user', query, this.httpOptions);
  }

	//Book Barrow
  public instanceCheckout(data): Observable<any> {
    return this.http.put(this.apiUrl+'book_instance/checkout', data, this.httpOptions);
  }

  public userCheckout(data): Observable<any> {
    return this.http.put(this.apiUrl+'user/checkout', data, this.httpOptions);
  }

	//Book Return
  public instanceReturn(data): Observable<any> {
    return this.http.put(this.apiUrl+'book_instance/return', data, this.httpOptions);
  }

  public userReturn(data): Observable<any> {
    return this.http.put(this.apiUrl+'user/return', data, this.httpOptions);
  }

  public userId(id): Observable<any> {
    return this.http.get(this.apiUrl+"user/"+id, this.httpOptions);
  }

}
