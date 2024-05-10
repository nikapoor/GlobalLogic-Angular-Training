import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  userList: any;

  constructor(private _http: HttpClient) { }

  fetchUsers() {
    return this._http.get(`http://localhost:3000/users`);
  }

  fetchUserById(id: string) {
    return this._http.get(`http://localhost:3000/users/${id}`)
  }

  addUser(user: User) {
    return this._http.post(`http://localhost:3000/users`, user);
  }
}
