import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class AuthAPIService {

  constructor(private http: HttpClient) { }

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

}
