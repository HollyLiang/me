import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { MatModule } from 'src/app/shared/mat.module';

import { SignInPage } from './signin/signin';

@NgModule({
  declarations: [SignInPage],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    MatModule,
  ]
})
export class AuthModule { }
