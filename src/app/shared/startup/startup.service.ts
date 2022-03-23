import { Injectable } from '@angular/core';

@Injectable()
export class StartupService {

  constructor() { }

  /** 起始事件 */
  load(): Promise<unknown> {
    // 設定server Url
    return new Promise((resolve) => {
      resolve(null);
    });
  }
}
