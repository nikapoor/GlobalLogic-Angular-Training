import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeGuard } from './employee.guard';

import { IndexComponent } from './index/index.component';
import { EmployeeComponent } from './employee.component';


const routes: Routes = [
  {
    path: '',
    component: EmployeeComponent,
    children: [
      { path: '', component: IndexComponent }
    ],
    canActivate: [ EmployeeGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }