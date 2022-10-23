import { AuthLineSignInCallbackPage } from './line-signin-callback/line-signin-callback.page';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInPage } from './signin/signin';


const routes: Routes = [
  { path: 'signIn', component: SignInPage },
  { path: 'line/callback', component: AuthLineSignInCallbackPage },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
