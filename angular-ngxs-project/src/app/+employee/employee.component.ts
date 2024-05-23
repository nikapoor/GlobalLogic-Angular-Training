import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ave-dashboard',
  template: `
    <h3>Employee</h3>
      <router-outlet></router-outlet>
  `
})
export class EmployeeComponent implements OnInit {

  constructor() {}

  ngOnInit() {}

}
