import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from '@hy/core';
import { environment } from '@env/environment';
import { map } from 'rxjs/operators';

@Injectable()
export class LineApiService {
  private readonly LINE_PROFILE_URL = 'https://api.line.me/v2/profile';

  private tokenType: string;
  private accessToken: string;

  constructor(
    private http: HttpClient,
    private userService: UserService
  ) { }

  /**
   * Sign In
   * @param acc Account
   * @param pwd Password
   */
  public loginToken(code: string) {
    const body = { code, redirectUri: location.origin + '/auth/line/callback' };
    return this.http.post<LineTokenModel>(`${environment.serverUrl}Line/login/token`, body)
      .pipe(map(res => {
        this.tokenType = res.token_type;
        this.accessToken = res.access_token;
        this.userService.accessToken = this.accessToken;
        return res;
      }))
  }

  public getProfile() {
    return this.http.get<LineUserProfileModel>(this.LINE_PROFILE_URL, {
      headers: {
        Authorization: `${this.tokenType} ${this.accessToken}`
      }
    }).pipe(map(res => {
      this.userService.userInfo = {
        id: res.userId,
        name: res.displayName,
        imgUrl: res.pictureUrl
      };
      return res;
    }));
  }

}

interface LineTokenModel {
  access_token: string;
  token_type: string;
  refresh_token: string;
  express_in: number;
  scope: string;
  id_token: string;
}

interface LineUserProfileModel {
  userId: string;
  displayName: string;
  pictureUrl: string;
}
