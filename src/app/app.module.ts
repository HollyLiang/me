import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DelonMockModule.forRoot()
  ],
  providers: [
    { provide: ALAIN_CONFIG, useValue: alainConfig },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
