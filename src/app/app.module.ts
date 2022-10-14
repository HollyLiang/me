import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatModule } from './shared/mat.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '@env/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { MarkdownModule } from 'ngx-markdown';

// #region Startup
export function StartupServiceFactory(startupService: StartupService) {
  return () => startupService.load();
}
const APPINIT_PROVIDES = [
  StartupService,
  {
    provide: APP_INITIALIZER,
    useFactory: StartupServiceFactory,
    deps: [StartupService],
    multi: true
  },
];
// #endregion

// #region Http Interceptors
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DefaultInterceptor } from '@hy/core';

const INTERCEPTOR_PROVIDES = [
  { provide: HTTP_INTERCEPTORS, useClass: DefaultInterceptor, multi: true }
];
// #endregion

// #region Mock
import { DelonMockModule, MockConfig, MOCK_CONFIG } from '@hy/core/mock';
import * as MOCKDATA from '../../_mock';
const mockConfig: MockConfig = {
  data: MOCKDATA,
  log: environment.production === false
};
// #endregion

import { HomePage } from './routes/home/home';
import { StartupService } from '@shared/startup';

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
    DelonMockModule.forRoot(),
    MarkdownModule.forRoot(),
  ],
  providers: [
    { provide: MOCK_CONFIG, useValue: mockConfig },
    ...INTERCEPTOR_PROVIDES,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
