import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./_shared/auth-layout/auth-layout.component').then(m => m.AuthLayoutComponent),
    children: [
      { path: 'signIn', loadComponent: () => import('./signin/signin').then(m => m.SignInPage) },
      { path: 'modify-profile', loadComponent: () => import('./modify-display-name/modify-display-name.component').then(m => m.ModifyDisplayNameComponent) },
    ]
  },
  { path: 'line/callback', loadComponent: () => import('./line-signin-callback/line-signin-callback.page').then(m => m.AuthLineSignInCallbackPage) },
]
