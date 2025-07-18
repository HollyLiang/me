import { LineApiService } from './_shared/apis/line.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { SignInPage } from './signin/signin';

import { AuthApiService } from './_shared/apis/auth.service';
import { AuthLineLoginBtnComponent } from './signin/comps/line-login-btn.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AuthRoutingModule,
        SharedModule,
        SignInPage,
        AuthLineLoginBtnComponent
    ],
    providers: [
        AuthApiService,
        LineApiService,
    ]
})
export class AuthModule { }
