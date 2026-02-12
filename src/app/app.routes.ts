import { Routes } from '@angular/router';

import { HomeComponent } from './home/home';
import { LoginComponent } from './auth/login/login';
import { RegisterComponent } from './auth/register/register';

import { CustomerDashboardComponent } from './customer/customer-dashboard/customer-dashboard';
import { DepositComponent } from './customer/deposit/deposit';
import { WithdrawComponent } from './customer/withdraw/withdraw';

import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard';

import { authGuard } from './guards/auth-guard';
import { adminGuard } from './guards/admin-guard';

import { CustomerCrudComponent } from './admin/customer-crud/customer-crud';



export const routes: Routes = [
  { path: '', component: HomeComponent },

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  {
    path: 'customer',
    component: CustomerDashboardComponent,
    canActivate: [authGuard]
  },
  {
    path: 'deposit',
    component: DepositComponent,
    canActivate: [authGuard]
  },
  {
    path: 'withdraw',
    component: WithdrawComponent,
    canActivate: [authGuard]
  },
  {
    path: 'admin',
    component: AdminDashboardComponent,
    canActivate: [adminGuard]
  },

 {
   path: 'admin/customers',
   component: CustomerCrudComponent,
   canActivate: [adminGuard]
}


];
