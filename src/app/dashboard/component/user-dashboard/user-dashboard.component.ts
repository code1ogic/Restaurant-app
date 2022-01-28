import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/shared/auth.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  dashboard: boolean = false;
  billSection: boolean = false;
  employeeSection: boolean = false;
  settings: boolean = false;
  analytics: boolean = false;

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.showDashboard();
  }

  setOff() {
    this.dashboard = false;
    this.billSection = false;
    this.employeeSection = false;
    this.settings = false;
    this.analytics = false;
  }

  // show dashboard
  showDashboard() {
    this.setOff();
    this.dashboard = true;
  }

  // show bill section
  showBillSection() {
    this.setOff();
    this.billSection = true;
  }

  // show dashboard
  showEmployeeSection() {
    this.setOff();
    this.employeeSection = true;
  }

  // show dashboard
  showSettings() {
    this.setOff();
    this.settings = true;
  }

  // show dashboard
  showAnalytics() {
    this.setOff();
    this.analytics = true;
  }

  // sign out
  signout() {
    this.auth.logout();
  }
}
