import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { MockInterceptor } from './mock.interceptor';

@NgModule({})
export class MockModule {
  static forRoot(): ModuleWithProviders<MockModule> {
    return {
      ngModule: MockModule,
      providers: [{ provide: HTTP_INTERCEPTORS, useClass: MockInterceptor, multi: true }],
    };
  }

  static forChild(): ModuleWithProviders<MockModule> {
    return {
      ngModule: MockModule,
      providers: [{ provide: HTTP_INTERCEPTORS, useClass: MockInterceptor, multi: true }],
    };
  }
}
