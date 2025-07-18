import { DialogComponent } from './dialog/dialog.component';
import { MarkdownModule } from 'ngx-markdown';
import { NgModule } from '@angular/core';
import { OAuthComponent } from './oauth/oauth.component';
import { OAuthLingLoginComponent } from './oauth/line/login/line-login.component';
import { ResearchRoutingModule } from './research-routing.module';
import { ResThemePage } from './theme/theme.page';
import { RouterOutletComponent } from './dialog/router-outlet/router-outlet.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
    imports: [
        SharedModule,
        ResearchRoutingModule,
        MarkdownModule.forChild(),
        DialogComponent,
        OAuthComponent,
        OAuthLingLoginComponent,
        RouterOutletComponent,
        ResThemePage,
    ]
})
export class ResearchModule { }
