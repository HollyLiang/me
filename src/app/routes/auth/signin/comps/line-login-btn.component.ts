import { environment } from '@env/environment';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-line-login-btn',
  templateUrl: 'line-login-btn.component.html',
  styleUrls: ['./line-login-btn.component.scss']
})

export class AuthLineLoginBtnComponent implements OnInit {

  readonly redirectUrl = location.origin + '/auth/line/callback';

  constructor() { }

  ngOnInit() { }

  onLineLoginClick() {
    const params = [
      'response_type=code',
      `client_id=1657583999`,
      'state=123123',
      'scope=profile%20openid	',
      `redirect_uri=${this.redirectUrl}`,
      'nonce=09876xyz'
    ];
    const url = `https://access.line.me/oauth2/v2.1/authorize?${params.join('&')}`
    window.open(url, '_self');
  }
}
