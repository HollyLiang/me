import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthPublicModule } from '../routes/auth/_shared/auth-public.module';


import { LayoutComponent } from './layout.component';

@NgModule({
    imports: [
    AuthPublicModule,
    BrowserModule,
    RouterModule,
    LayoutComponent,
],
    exports: [LayoutComponent],
    providers: [],
})
export class LayoutModule { }
