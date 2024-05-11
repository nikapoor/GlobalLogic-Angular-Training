import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user.model';

const BASE_URL = `http://localhost:3000/users`;

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  userList: any;

  

  constructor(private _http: HttpClient) { }

  fetchUsers() {
    return this._http.get(`${BASE_URL}`);
  }

  fetchUserById(id: string) {
    return this._http.get(`${BASE_URL}/${id}`)
  }

  addUser(user: User) {
    return this._http.post(`${BASE_URL}`, user);
  }

  deleteUser(id: string) {
    return this._http.delete(`${BASE_URL}/${id}`)
  }

  updateUser(user: User) {
    return this._http.put(`${BASE_URL}/${user.id}`, user);
  }
  
}
