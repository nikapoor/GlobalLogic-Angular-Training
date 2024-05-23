import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMP } from '../model/emp.model';
import { LoginModel } from '../model/login.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  baseUrl = 'http://localhost:3000/'
  userList: any;

  constructor(private httpClient: HttpClient) { }

  fetchEMP() {
    return this.httpClient.get(`${this.baseUrl}employee`)
  }

  fetchEMPById(id: any) {
    return this.httpClient.get<EMP>(`${this.baseUrl}employee/${id}`)
  }

  addEMP(emp: EMP) {
    return this.httpClient.post<EMP>(`${this.baseUrl}employee`, emp)
  }

  deleteEMP(id: string) {
    return this.httpClient.delete(`${this.baseUrl}employee/${(id)}`,)
  }

  updateEMP(emp: EMP) {
    return this.httpClient.put<EMP>(`${this.baseUrl}employee/${(emp.id)}`, emp)
  }
  login(credentials: LoginModel): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}login`, credentials);
  }

}
