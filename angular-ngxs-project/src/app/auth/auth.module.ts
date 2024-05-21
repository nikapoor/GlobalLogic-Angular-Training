import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';

@NgModule({
  declarations: [ LoginComponent,AuthComponent ],
  imports: [ AuthRoutingModule, ReactiveFormsModule,CommonModule ]
})
export class AuthModule {}
