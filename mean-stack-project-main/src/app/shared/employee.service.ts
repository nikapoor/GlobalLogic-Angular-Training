import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  readonly baseURL = 'http://localhost:5000/employees';

  constructor(private http: HttpClient) { }

  postEmployee(emp: Employee) {
    console.log(emp);
    return this.http.post(this.baseURL, emp);
  }

  getEmployeeList() {
    return this.http.get(this.baseURL);
  }

  putEmployee(emp: Employee) {
    return this.http.put(this.baseURL + `/${emp._id}`, emp);
  }

  deleteEmployee(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }
}
