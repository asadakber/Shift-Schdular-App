import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../providers/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
  forgotForm: FormGroup
  constructor(private fb: FormBuilder,private authservice: AuthService) { }

  ngOnInit() {
    this.initForm();
  }


  initForm() {
    this.forgotForm = this.fb.group({
      email: ['', Validators.required]
    })
  }

  forgotPassword() {
    this.authservice.forgotPassword(this.forgotForm.value)
  }

}
