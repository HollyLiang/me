import { InjectionToken } from '@angular/core';

export interface MockConfig {
  /**
   * 规则定义数据
   */
  data: any;
  /**
   * 请求延迟，单位：毫秒，默认：`300`
   */
  delay?: number;
  /**
   * 是否强制所有请求都Mock，默认：`false`，`true` 表示当请求的URL不存在时直接返回 404 错误，`false` 表示未命中时发送真实HTTP请求
   */
  force?: boolean;
  /**
   * 是否打印 Mock 请求信息，弥补浏览器无Network信息，默认：`true`
   */
  log?: boolean;
  /**
   * 是否拦截命中后继续调用后续拦截器的 `intercept` 方法，默认：`true`
   */
  executeOtherInterceptors?: boolean;
}


export const MOCK_DEFULAT_CONFIG: MockConfig = {
  data: null,
  delay: 300,
  force: false,
  log: true,
  executeOtherInterceptors: true,
};

export const MOCK_CONFIG = new InjectionToken<MockConfig>('mock-config', {
  providedIn: 'root',
  factory: MOCK_CONFIG_FACTORY,
});

export function MOCK_CONFIG_FACTORY(): MockConfig {
  return { data: null };
}
