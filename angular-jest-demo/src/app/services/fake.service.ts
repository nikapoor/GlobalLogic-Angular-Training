import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FakeService {

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get
    ("https://jsonplaceholder.typicode.com/todos/1");
  }
}
