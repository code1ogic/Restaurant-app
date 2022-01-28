import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email : string = '';
  password : string = '';

  constructor(private authservice : AuthService) { }

  ngOnInit(): void {
  }

  register() {
    this.authservice.register(this.email,this.password);
    this.email='';
    this.password='';
  }
}
