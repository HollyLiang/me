import { BehaviorSubject } from 'rxjs';

import { Injectable } from '@angular/core';

import { LocalStorageService } from './local-storage.service';

@Injectable({ providedIn: 'root' })
export class UserService {

  private userInfoSubject = new BehaviorSubject<null>(null);

  constructor(private localStorage: LocalStorageService) {
    const storedUserInfo = this.localStorage.getItem('userInfo');
    if (storedUserInfo) {
      this.userInfoSubject.next(JSON.parse(storedUserInfo));
    }
  }

  public set accessToken(value: string) {
    this.localStorage.setItem('AccessToken', value);
  }
  public get accessToken() {
    return this.localStorage.getItem('AccessToken').toString();
  }

  public set account(value: string) {
    this.localStorage.setItem('Account', value.toString());
  }
  public get account() {
    return this.localStorage.getItem('Account');
  }

  public set rememberMe(value: boolean) {
    this.localStorage.setItem('RememberMe', value.toString());
  }
  public get rememberMe(): boolean {
    return this.localStorage.getItem('RememberMe') === 'true';
  }

  public set userInfo(value: CoreUserModel) {
    this.localStorage.setItem('userInfo', JSON.stringify(value));
  }
  public get userInfo(): CoreUserModel {
    const info = this.localStorage.getItem('userInfo');
    return (info && JSON.parse(info)) || null;
  }

  public get userInfoChanges() {
    return this.userInfoSubject.asObservable();
  }

  public updateUserInfo() {
    // 更新並通知
    this.userInfoSubject.next(null);
  }

}

interface CoreUserModel {
  id: string;
  name: string;
  imgUrl?: string;
}
