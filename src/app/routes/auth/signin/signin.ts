import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthAPIService } from '@api/auth/auth.service';
import { UserService } from '@core';

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
    private userService: UserService,
    private authAPI: AuthAPIService
  ) {

    let account = '';
    const remember = this.userService.rememberMe;
    if (remember) {
      account = this.userService.account;
    }

    this.signInForm = this.fb.group({
      account: [account, [Validators.required]],
      password: ['', [Validators.required]],
      rememberMe: [this.userService.rememberMe]
    });
  }

  ngOnInit() {
  }

  onFormSubmit() {
    if (this.signInForm.valid) {
      const formValue = this.signInForm.value;
      const remember: boolean = this.signInForm.value.rememberMe;
      this.userService.rememberMe = remember;
      this.userService.account = remember ? formValue.account : '';

      this.errorMsg = '';

      this.authAPI.signIn(formValue.account, formValue.password).subscribe(res => {
        this.router.navigate(['/']);
      }, error => {
        this.errorMsg = 'AccountOrPasswordError';
      });
    }
  }
}
