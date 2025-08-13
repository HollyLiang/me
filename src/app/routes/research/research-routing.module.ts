import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ColorRecognizerComponent } from './color-recognizer/color-recognizer.component';
import { DialogComponent } from './dialog/dialog.component';
import { OAuthLingLoginComponent } from './oauth/line/login/line-login.component';
import { OAuthComponent } from './oauth/oauth.component';
import { ResThemePage } from './theme/theme.page';

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
  { path: 'color-recognizer', component: ColorRecognizerComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ResearchRoutingModule { }
