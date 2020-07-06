import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResearchRoutingModule } from './research-routing.module';
import { MatModule } from 'src/app/shared/mat.module';

import { DialogComponent } from './dialog/dialog.component';
import { RouterOutletComponent } from './dialog/router-outlet/router-outlet.component';

@NgModule({
  declarations: [
    DialogComponent,
    RouterOutletComponent
  ],
  imports: [
    CommonModule,
    ResearchRoutingModule,
    MatModule,
  ]
})
export class ResearchModule { }
