import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  userList: any;

  constructor(private _http: HttpClient) { }

  fetchUsers() {
    return this._http.get(`https://jsonplaceholder.typicode.com/users`);
  }
}
