import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatModule } from './shared/mat.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// #region Mock
import { AlainConfig, ALAIN_CONFIG } from '@delon/util';
import { DelonMockModule } from '@delon/mock';
import * as MOCKDATA from '../../_mock';
const alainConfig: AlainConfig = {
  mock: { data: MOCKDATA }
};
// #endregion

import { LayoutComponent } from './layout/layout.component';
import { HomePage } from './routes/home/home';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HomePage
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatModule,
    DelonMockModule.forRoot(),
  ],
  providers: [
    { provide: ALAIN_CONFIG, useValue: alainConfig },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
