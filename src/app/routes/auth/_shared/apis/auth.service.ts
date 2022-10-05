import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { UserService } from '@hy/core';
import { AuthUserModel } from '../models/user.model';

@Injectable()
export class AuthApiService {

  constructor(
    private http: HttpClient,
    private userService: UserService
  ) { }

  /**
   * Sign In
   * @param acc Account
   * @param pwd Password
   */
  public signIn(acc: string, pwd: string) {
    const body =  {
      account: acc,
      password: pwd,
    };
    return this.http.post<AuthUserModel>('~/api/auth/signIn', body)
      .pipe(map(res => {
        this.userService.userInfo = res;
        return res;
      }));
  }

  /**
   * 登出
   */
  public signOut() {
    return this.http.post('~/api/auth/signOut', null).pipe(
      map(result => {
        this.userService.accessToken = null;
        return result;
      })
    );
  }

}
