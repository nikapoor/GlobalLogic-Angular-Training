import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginGuard } from './login.guard';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
  {
    path: 'auth',
    children: [
      {
        path: 'login', component: LoginComponent
      }
    ],
    canActivate: [LoginGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
