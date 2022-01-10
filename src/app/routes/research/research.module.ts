import { ResearchRoutingModule } from './research-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ResThemePage } from './theme/theme.page';
import { NgModule } from '@angular/core';

import { DialogComponent } from './dialog/dialog.component';
import { RouterOutletComponent } from './dialog/router-outlet/router-outlet.component';

@NgModule({
  declarations: [
    DialogComponent,
    RouterOutletComponent,
    ResThemePage
  ],
  imports: [
    SharedModule,
    ResearchRoutingModule
  ]
})
export class ResearchModule { }
