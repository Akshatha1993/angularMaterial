import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewloginComponent } from './newlogin/newlogin.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/newlogin',
    pathMatch: 'full'
  },
  {
  path: 'login',
  component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'newlogin',
    component: NewloginComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
