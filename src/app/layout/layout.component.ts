import { Component, OnInit } from '@angular/core';
import { AuthApiService } from '@api/auth/auth.service';
import { UserService } from '@hy/core';
import { MatToolbar, MatToolbarRow } from '@angular/material/toolbar';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NgTemplateOutlet, NgIf } from '@angular/common';
import { MatButton } from '@angular/material/button';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss'],
    standalone: true,
    imports: [MatToolbar, MatToolbarRow, RouterLink, NgTemplateOutlet, RouterOutlet, NgIf, MatButton]
})
export class LayoutComponent implements OnInit {

  isSignIn: boolean;

  userInfo = this.userService.userInfo;

  constructor(
    private userService: UserService,
    private authAPI: AuthApiService
  ) { }

  ngOnInit() {
    this.isSignIn = this.userService.accessToken && true;
  }

  onSignOutClick() {
    this.authAPI.signOut().subscribe(res => {
      this.isSignIn = false;
     });
  }

}
