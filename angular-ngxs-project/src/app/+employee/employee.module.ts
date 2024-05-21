import { NgModule } from '@angular/core';
import { EmployeeComponent } from './employee.component';
import { IndexComponent } from './index/index.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeeRoutingModule } from './employee-routing.module';

@NgModule({
  declarations: [EmployeeComponent, IndexComponent],
  imports: [CommonModule,
     EmployeeRoutingModule, 
     ReactiveFormsModule]
})
export class EmployeeModule { }