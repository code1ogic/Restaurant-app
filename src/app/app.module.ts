import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/component/login/login.component';
import { RegisterComponent } from './auth/component/register/register.component';
import { ForgotPasswordComponent } from './auth/component/forgot-password/forgot-password.component';
import { AngularFireModule} from '@angular/fire/compat'
import { environment } from 'src/environments/environment';
import { FormsModule } from '@angular/forms';
import { VarifyEmailComponent } from './auth/component/varify-email/varify-email.component';
import { UserDashboardComponent } from './dashboard/component/user-dashboard/user-dashboard.component';
import { AdminPanelComponent } from './dashboard/component/admin-panel/admin-panel.component';
import { BillSectionComponent } from './dashboard/component/bill-section/bill-section.component';
import { EmployeeSectionComponent } from './dashboard/component/employee-section/employee-section.component';
import { SettingsComponent } from './dashboard/component/settings/settings.component';
import { AnalyticsComponent } from './dashboard/component/analytics/analytics.component';
import { MenuComponent } from './dashboard/component/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    VarifyEmailComponent,
    UserDashboardComponent,
    AdminPanelComponent,
    BillSectionComponent,
    EmployeeSectionComponent,
    SettingsComponent,
    AnalyticsComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
