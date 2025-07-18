import { HttpClient } from '@angular/common/http';
import { UntypedFormGroup, UntypedFormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatCard } from '@angular/material/card';
import { MatFormField } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatButton } from '@angular/material/button';

@Component({
    selector: 'app-training-oauth',
    templateUrl: 'oauth.component.html',
    standalone: true,
    imports: [FormsModule, ReactiveFormsModule, MatCard, MatFormField, MatInput, MatButton]
})

export class OAuthComponent implements OnInit {

  // readonly REDIRECT_URL = 'http://localhost:40001/research/oauth';
  readonly REDIRECT_URL = 'http://10.8.0.101/research/oauth';

  form: UntypedFormGroup;

  code: string;

  constructor(
    private http: HttpClient,
    private fb: UntypedFormBuilder,
    private route: ActivatedRoute,
  ) {
    this.initForm();
    this.initParams();
  }

  initForm() {
    this.form = this.fb.group({
      clientId: '',
      clientSecret: '',
      code: '',
      accessToken: '',
      message: 'Hello World!',
    });
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
    this.form.controls.code.setValue(code);
    const value = this.form.value;
    const body = {
      code: this.code,
      redirectUri: this.REDIRECT_URL,
      clientId: value.clientId,
      clientSecret: value.clientSecret
    };
    this.http.post(`http://localhost:5031/Line/Notify/oauth`, body).subscribe(res => {
      console.log(res);
      this.form.controls.accessToken.setValue(res['access_token']);
    });
  }

  onCreateAccessTokenClick() {
    const value = this.form.value;
    const params = [
      'response_type=code',
      `client_id=${value.clientId}`,
      'state=123123',
      'scope=notify',
      `redirect_uri=${this.REDIRECT_URL}`
    ];
    const url = `https://notify-bot.line.me/oauth/authorize?${params.join('&')}`
    window.open(url, '_blank');
  }

  onSendMsgClick() {
    const value = this.form.value;
    const body = { accessToken: value.accessToken, message: value.message };
    this.http.post('http://localhost:5031/Line/Notify/message', body).subscribe(res => {
      console.log(res);
    });
  }

  onLineLoginClick() {
    const value = this.form.value;
    const params = [
      'response_type=code',
      `client_id=`,
      'state=123123',
      'scope=profile%20openid	',
      `redirect_uri=`,
      'nonce='
    ];
    const url = `https://access.line.me/oauth2/v2.1/authorize?${params.join('&')}`
    window.open(url, '_blank');
  }
}
