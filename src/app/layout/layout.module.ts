import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthPublicModule } from '../routes/auth/_shared/auth-public.module';
import { MatModule } from '../shared/mat.module';

import { LayoutComponent } from './layout.component';

@NgModule({
  imports: [
    AuthPublicModule,
    BrowserModule,
    RouterModule,
    MatModule,
  ],
  exports: [LayoutComponent],
  declarations: [LayoutComponent],
  providers: [],
})
export class LayoutModule { }
