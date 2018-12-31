import { Component, OnInit } from '@angular/core';
// import { Store, select, State } from '@ngrx/store';
// import { Observable } from 'rxjs/Observable'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import * as authActions from '../../../store/auth.actions';
// import { User } from '../../../store/auth.models';
import { AuthService } from '../../../providers/auth.service';

// interface AppState {
//   user: User
// }

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  RegisterForm: FormGroup
  constructor(private fb: FormBuilder, private authservice: AuthService) { }

  ngOnInit() {
    this.initForm()
  }

  initForm() {
    this.RegisterForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      usertype: ['', Validators.required]
    })
  }

  onRegister() {
    // this.store.dispatch(
    //   new authActions.Signup({user: this.RegisterForm.value})
    // )
    this.authservice.signup(this.RegisterForm.value)
  }

}
