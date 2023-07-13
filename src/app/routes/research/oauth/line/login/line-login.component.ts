import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oauth-line-login',
  templateUrl: 'line-login.component.html'
})

export class OAuthLingLoginComponent implements OnInit {
  readonly REDIRECT_URL = 'http://10.8.0.101/research/oauth/line/login';

  profile: LineUseProfileModel;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute
  ) {
    this.initParams();
  }

  initParams() {
    const qParams = this.route.snapshot.queryParams;
    console.log(qParams)
    if (qParams?.code) {
      this.getAccessToken(qParams.code);
    }
  }

  ngOnInit() { }


  getAccessToken(code) {
    const body = {
      code: code,
      redirectUri: this.REDIRECT_URL,
    };
    this.http.post(`http://localhost:5031/Line/login/token`, body).subscribe(res => {
      console.log(res);
      this.http.get('https://api.line.me/v2/profile', {
        headers: {
          Authorization: res['token_type'] + ' ' + res['access_token']
        }
      }).subscribe(res2 => {
        this.profile = res2 as LineUseProfileModel;
      });
    });
  }
}

interface LineUseProfileModel {
  userId: string;
  displayName: string;
  pictureUrl: string;
}
