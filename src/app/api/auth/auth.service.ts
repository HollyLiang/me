import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { UserService } from '@core/storage';

@Injectable({ providedIn: 'root' })
export class AuthAPIService {

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
    return this.http.post('~/api/auth/signIn', body);
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
