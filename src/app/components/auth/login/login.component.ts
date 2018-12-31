import { Component, OnInit, EventEmitter } from '@angular/core';
import { Store, select, State } from '@ngrx/store';
import { Observable } from 'rxjs/Observable'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import * as authActions from '../../../store/auth.actions';
// import { User } from '../../../store/auth.models';
import { AuthService } from '../../../providers/auth.service';

// interface AppState {
//   user: User
// }

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   LoginForm: FormGroup
  constructor(private fb: FormBuilder, private authservice: AuthService) { }

  ngOnInit() {
    this.initForm()
  }

  initForm() {
    this.LoginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  googleAuth() {
    this.authservice.googleAuth();
  }

  FacebookAuth() {
    this.authservice.facebookLogin();
  }

  AnonmyouslyLogin() {
    this.authservice.AnonmyouslyLogin();
  }
  

  onLogin() {
    // this.store.dispatch(
    //   new authActions.Signin({user: this.LoginForm.value})
    // )
     this.authservice.signin(this.LoginForm.value)
   
  }

}
