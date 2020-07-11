import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatModule } from './shared/mat.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// #region Http Interceptors
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { DefaultInterceptor } from '@core/net/default.interceptor';

const INTERCEPTOR_PROVIDES = [
  { provide: HTTP_INTERCEPTORS, useClass: DefaultInterceptor, multi: true }
];
// #endregion

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

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HomePage,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatModule,
    DelonMockModule.forRoot()
  ],
  providers: [
    { provide: ALAIN_CONFIG, useValue: alainConfig },
    ...INTERCEPTOR_PROVIDES,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
