import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable()
export class BookService {
  private baseUrl: string = 'https://www.googleapis.com/books/v1/volumes?q=';
	private apiUrl = environment.apiUrl;
  public assetUrl = environment.asset;
  public selected;

  constructor(private http: HttpClient) {}

  public search(term): Observable<any> {
    return this.http.get(this.baseUrl + term);
  }

  public searchAuthor(author): Observable<any> {
    return this.http.post(this.apiUrl+"author/search", author);
  }

  public check(query): Observable<any> {
    return this.http.post(this.apiUrl+"book/search", query);
  }

  public instance(query): Observable<any> {
    return this.http.post(this.apiUrl+"book_instance/search", query);
  }

  public instanceId(id): Observable<any> {
    return this.http.get(this.apiUrl+"book_instance/"+id);
  }

  public getById(id): Observable<any> {
    return this.http.get(this.apiUrl+"book/"+id);
  }

  public genres(): Observable<any> {
    return this.http.get(this.apiUrl+"genre/");
  }

  public genre(id): Observable<any> {
    return this.http.get(this.apiUrl+"genre/"+id);
  }

}
