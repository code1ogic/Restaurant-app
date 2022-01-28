import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private firebaseAuth : AngularFireAuth, 
    private router : Router) { }

   // login
   login(email : string, password : string) {
    this.firebaseAuth.signInWithEmailAndPassword(email,password).then(
      res => {
          if(res.user?.emailVerified == true)
            this.router.navigate(['/dashboard']);
          else
            this.router.navigate(['/varify-email']);
          localStorage.setItem('token',JSON.stringify(res.user?.uid));
      }, err => {
        alert(err.message);
      }
    )
  }

  // register
  register(email : string, password : string) {
    this.firebaseAuth.createUserWithEmailAndPassword(email,password).then(
      res => {
        alert('Registration successful.');
        this.SendVerificationMail(res.user);
      }, err => {
        alert(err.message);
      }
    )
  }

  //send varifaction link
  SendVerificationMail(user : any) {
    console.log(user);
    user.sendEmailVerification().then(() => {
      this.router.navigate(['/varify-email']);
    }, (err : any) => {
      alert('Failed to send varification mail. Please register with valid email address.')
    })
  }

  // forgot password
  forgotPassword(email : string) {
    this.firebaseAuth.sendPasswordResetEmail(email).then(() => {
      alert('Password link has been sent on your email.');
      this.router.navigate(['/login']);
    }).catch(err => {
      alert(err.message);
    })
  }

  // logout
  logout() {
    this.firebaseAuth.signOut().then(() => {
      this.router.navigate(['/login']);
      localStorage.removeItem('token');
    })
  }

  // is user logged in
  userLoggedIn() : boolean {
    var token = localStorage.getItem('token');
    if(token == '' || token == null)
      return false;
    return true;
  }



}
