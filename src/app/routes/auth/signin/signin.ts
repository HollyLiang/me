import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '@hy/core';
import { AuthApiService } from '../_shared/apis/auth.service';
import { MatFormField, MatLabel, MatError } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { FormErrorComponent } from '../../../shared/form-error/form-error.component';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { NgIf } from '@angular/common';
import { MatButton } from '@angular/material/button';
import { MatDivider } from '@angular/material/divider';
import { AuthLineLoginBtnComponent } from './comps/line-login-btn.component';

@Component({
    selector: 'app-auth-signin',
    templateUrl: './signin.html',
    styleUrls: ['./signin.scss'],
    standalone: true,
    imports: [FormsModule, ReactiveFormsModule, MatFormField, MatLabel, MatInput, MatError, FormErrorComponent, MatSlideToggle, NgIf, MatButton, MatDivider, AuthLineLoginBtnComponent]
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
