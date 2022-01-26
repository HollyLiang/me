import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatModule } from './shared/mat.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '@env/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';

// #region Http Interceptors
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { DefaultInterceptor } from '@core';

const INTERCEPTOR_PROVIDES = [
  { provide: HTTP_INTERCEPTORS, useClass: DefaultInterceptor, multi: true }
];
// #endregion

// #region Mock
import { DelonMockModule, MockConfig, MOCK_CONFIG } from '@core/mock';
import * as MOCKDATA from '../../_mock';
const mockConfig: MockConfig = {
  data: environment.production ? null : MOCKDATA,
  log: true// environment.DELON_MOCK_REQUEST_LOG
};
// #endregion

import { HomePage } from './routes/home/home';

@NgModule({
  declarations: [
    AppComponent,
    HomePage,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    HttpClientModule,
    MatModule,
    DelonMockModule.forRoot()
  ],
  providers: [
    { provide: MOCK_CONFIG, useValue: mockConfig },
    ...INTERCEPTOR_PROVIDES,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
