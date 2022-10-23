import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LineApiService } from './../_shared/apis/line.service';

@Component({
  selector: 'app-auth-line-signin-callback',
  template: ``
})

export class AuthLineSignInCallbackPage implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private lineService: LineApiService,
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
      redirectUri: '',
    };
    this.lineService.loginToken(code).subscribe(res => {
      this.lineService.getProfile().subscribe(res => {
        this.router.navigate(['/']);
      });
    });
  }
}
