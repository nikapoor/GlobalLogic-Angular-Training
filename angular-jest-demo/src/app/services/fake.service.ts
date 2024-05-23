import { Injectable } from '@angular/core';
import { Observable, catchError, tap } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FakeService {

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get
    ("https://jsonplaceholder.typicode.com/todos/1");
  }

  getDatav2(): Observable<any> {
    const url = "https://jsonplaceholder.typicode.com/todos/1";
    return this.http.get(url).pipe(
      tap((data: any) => console.log('Data Fetched : ', data)),
      catchError(this.handleError('Failed to fetch data'))
    );
  }

  private handleError<T>(operation: any) {
    return (error: HttpErrorResponse): Observable<T> => {
      console.log(error);
      const message = `Server returned code ${error.status} with body ${error.error}`;
      throw new Error(`${operation} failed: ${message}`);
    }
  }

  postData(data: any): Observable<any> {
    const url = "https://jsonplaceholder.typicode.com/todos/1";
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
    return this.http.post(data, url, httpOptions);
  }

}
