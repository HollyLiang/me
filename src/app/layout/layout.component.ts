import { Component, OnInit } from '@angular/core';
import { AuthApiService } from '@api/auth/auth.service';
import { UserService } from '@hy/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
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
