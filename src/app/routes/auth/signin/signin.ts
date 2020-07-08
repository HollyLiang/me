import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthAPIService } from '@api/auth/auth.service';

@Component({
  selector: 'app-auth-signin',
  templateUrl: './signin.html',
  styleUrls: ['./signin.scss']
})
export class SignInPage implements OnInit {

  signInForm: FormGroup;

  errorMsg: string;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authAPI: AuthAPIService
  ) {
    this.signInForm = this.fb.group({
      account: ['', [Validators.required]],
      password: ['', [Validators.required]],
      rememberMe: [false]
    });
  }

  ngOnInit() {
  }

  onFormSubmit() {
    if (this.signInForm.valid) {
      this.authAPI.signIn(this.signInForm.value.account, this.signInForm.value.password).subscribe(res => {
        this.router.navigate(['/']);
      }, error => {
        this.errorMsg = 'AccountOrPasswordError';
      });
    }
  }
}
