import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LocalStorageService {

  PREFIX = 'HY';

  constructor() { }

  public setItem(key: string, value: string) {
    localStorage.setItem(this.getTransKey(key), value);
  }

  public getItem(key: string) {
    return localStorage.getItem(this.getTransKey(key)) || '';
  }

  private getTransKey(key: string) {
    return this.PREFIX + key.toUpperCase();
  }
}
