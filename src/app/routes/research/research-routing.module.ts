import { DialogComponent } from './dialog/dialog.component';
import { NgModule } from '@angular/core';
import { OAuthComponent } from './oauth/oauth.component';
import { ResThemePage } from './theme/theme.page';
import { RouterModule, Routes } from '@angular/router';
import { OAuthLingLoginComponent } from './oauth/line/login/line-login.component';

const routes: Routes = [
  { path: '', redirectTo: '/dialog', pathMatch: 'full' },
  { path: 'dialog', component: DialogComponent, pathMatch: 'full' },
  {
    path: 'oauth',
    children: [
      { path: '', component: OAuthComponent },
      {
        path: 'line',
        children: [
          { path: 'login', component: OAuthLingLoginComponent },
        ]
      }
    ]
  },
  { path: 'theme', component: ResThemePage },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ResearchRoutingModule { }
