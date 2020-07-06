import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResearchRoutingModule } from './research-routing.module';
import { MatModule } from 'src/app/shared/mat.module';

import { DialogComponent } from './dialog/dialog.component';
import { RouterOutletComponent } from './dialog/router-outlet/router-outlet.component';
import { Page1Component } from './dialog/page1/page1.component';


@NgModule({
  declarations: [
    DialogComponent,
    RouterOutletComponent,
    Page1Component
  ],
  imports: [
    CommonModule,
    ResearchRoutingModule,
    MatModule,
  ],
  entryComponents: [
    RouterOutletComponent
  ]
})
export class ResearchModule { }
