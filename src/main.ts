import * as MOCK_DATA from '_mock'
import { MarkdownModule } from 'ngx-markdown';

import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { enableProdMode, importProvidersFrom } from '@angular/core';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { DefaultInterceptor } from '@hy/core';
import { MOCK_CONFIG, MockConfig, MockModule } from '@hy/core/mock';

import { AppRoutingModule } from './app/app-routing.module';
import { AppComponent } from './app/app.component';
import { LayoutModule } from './app/layout/layout.module';
import { environment } from './environments/environment';

const mockConfig: MockConfig = {
  data: MOCK_DATA,
  log: environment.production === false
};

const INTERCEPTOR_PROVIDES = [
  { provide: HTTP_INTERCEPTORS, useClass: DefaultInterceptor, multi: true }
];


if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule, AppRoutingModule, LayoutModule, MockModule.forRoot(), MarkdownModule.forRoot()),
    { provide: MOCK_CONFIG, useValue: mockConfig },
    ...INTERCEPTOR_PROVIDES,
    provideHttpClient(withInterceptorsFromDi()),
    provideAnimations()
  ]
})
  .catch(err => console.error(err));
