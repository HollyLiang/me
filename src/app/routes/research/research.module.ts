import { MarkdownModule } from 'ngx-markdown';
import { SharedModule } from 'src/app/shared/shared.module';

import { NgModule } from '@angular/core';

import { DialogComponent } from './dialog/dialog.component';
import { OAuthLingLoginComponent } from './oauth/line/login/line-login.component';
import { OAuthComponent } from './oauth/oauth.component';
import { ResearchRoutingModule } from './research-routing.module';
import { ResThemePage } from './theme/theme.page';

@NgModule({
  imports: [
    SharedModule,
    ResearchRoutingModule,
    MarkdownModule.forChild(),
    DialogComponent,
    OAuthComponent,
    OAuthLingLoginComponent,
    ResThemePage,
  ]
})
export class ResearchModule { }
