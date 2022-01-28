import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './auth/component/forgot-password/forgot-password.component';
import { LoginComponent } from './auth/component/login/login.component';
import { RegisterComponent } from './auth/component/register/register.component';
import { VarifyEmailComponent } from './auth/component/varify-email/varify-email.component';
import { UserDashboardComponent } from './dashboard/component/user-dashboard/user-dashboard.component';

const routes: Routes = [
  {path : '', redirectTo: 'login', pathMatch : 'full'},
  {path : 'login', component : LoginComponent},
  {path : 'register', component : RegisterComponent},
  {path : 'forgot-password', component : ForgotPasswordComponent},
  {path : 'varify-email', component : VarifyEmailComponent},
  {path : 'dashboard', component : UserDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
