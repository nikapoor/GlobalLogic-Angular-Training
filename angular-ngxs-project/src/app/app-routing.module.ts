import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// GUARDS
import { DashboardGuard } from './+dashboard/dashboard.guard';

// COMPONENTS
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', component: HomeComponent,
    data: {
      title: 'Home',
      page: 'home'
    }
  },
  {
    path: 'dashboard', 
    loadChildren: () => import('./+dashboard/dashboard.module').then(x => x.DashboardModule),
    canActivate: [DashboardGuard]
    // loadChildren: './+dashboard/dashboard.module#DashboardModule',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // initialNavigation: 'enabled'
    initialNavigation: 'enabledBlocking'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
