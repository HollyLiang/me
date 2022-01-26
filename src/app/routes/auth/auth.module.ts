import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { SignInPage } from './signin/signin';

import { AuthApiService } from './_shared/apis/auth.service';

@NgModule({
  declarations: [SignInPage],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    SharedModule
  ],
  providers: [
    AuthApiService,
  ]
})
export class AuthModule { }
