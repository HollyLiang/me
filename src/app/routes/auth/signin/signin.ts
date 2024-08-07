import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '@hy/core';
import { AuthApiService } from '../_shared/apis/auth.service';

@Component({
  selector: 'app-auth-signin',
  templateUrl: './signin.html',
  styleUrls: ['./signin.scss']
})
export class SignInPage implements OnInit {

  signInForm: UntypedFormGroup;

  errorMsg: string;

  constructor(
    private fb: UntypedFormBuilder,
    private router: Router,
    private userService: UserService,
    private authAPI: AuthApiService
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
    this.errorMsg = '';

    if (this.signInForm.valid) {
      const formValue = this.signInForm.value;
      const remember: boolean = this.signInForm.value.rememberMe;
      this.userService.rememberMe = remember;
      this.userService.account = remember ? formValue.account : '';


      this.authAPI.signIn(formValue.account, formValue.password).subscribe(res => {
        console.log(res);
        this.router.navigate(['/']);
      }, () => {
        console.log('err')
        this.errorMsg = 'AccountOrPasswordError';
      });
    }
  }
}
