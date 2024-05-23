import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {
  constructor(private _httpClient: HttpClient) {}

  getUsers() {
    let url = `https://jsonplaceholder.typicode.com/users`;
    return this._httpClient.get(url);
  }
}
