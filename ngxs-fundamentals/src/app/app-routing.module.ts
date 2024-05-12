import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangeValueComponent } from './change-value/change-value.component';
import { DisplayValueComponent } from './display-value/display-value.component';

const routes: Routes = [
  {
    path: 'display-value',
    component: DisplayValueComponent,
  },
  {
    path: 'change-value',
    component: ChangeValueComponent,
  },
  { path: '', redirectTo: '/change-value', pathMatch: 'full' },
  { path: '**', component: ChangeValueComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
