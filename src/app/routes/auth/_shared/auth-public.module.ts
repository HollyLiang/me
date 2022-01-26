import { AuthApiService } from './apis/auth.service';
import { NgModule } from '@angular/core';


@NgModule({
  providers: [
    AuthApiService,
  ],
})
export class AuthPublicModule { }
