import { DialogComponent } from './dialog/dialog.component';
import { MarkdownModule } from 'ngx-markdown';
import { NgModule } from '@angular/core';
import { ResearchRoutingModule } from './research-routing.module';
import { ResThemePage } from './theme/theme.page';
import { RouterOutletComponent } from './dialog/router-outlet/router-outlet.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    DialogComponent,
    RouterOutletComponent,
    ResThemePage,
  ],
  imports: [
    SharedModule,
    ResearchRoutingModule,
    MarkdownModule.forChild(),
  ]
})
export class ResearchModule { }
