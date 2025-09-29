import { NgIf, NgTemplateOutlet } from '@angular/common';
import { Component, EventEmitter, Output, inject } from '@angular/core';
import { Auth, onAuthStateChanged, signOut } from '@angular/fire/auth';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '@hy/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, RouterLink, NgTemplateOutlet, NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  private router = inject(Router);
  private auth = inject(Auth);
  private userService = inject(UserService);

  @Output() menuClick = new EventEmitter<void>();

  isSignIn: boolean = false;
  userName: string;
  userPhotoUrl: string;

  constructor() {
    this.updateUserInfo();

    // 訂閱 userInfoChanges 以更新使用者資訊
    this.userService.userInfoChanges.subscribe(() => {
      this.updateUserInfo()
    });

    // 使用 onAuthStateChanged 更新 userInfo
    onAuthStateChanged(this.auth, () => {
      this.updateUserInfo()
    });
  }

  private updateUserInfo() {
    const user = this.auth.currentUser;
    this.isSignIn = !!user;
    this.userName = user?.displayName || 'Unknown User';
    this.userPhotoUrl = user?.photoURL;
  }

  onSignOutClick() {
    signOut(this.auth).then(() => {
      this.userService.userInfo = null;
      this.updateUserInfo();
      this.router.navigate(['/']);
    }).catch(err => {
      console.error('Sign out failed', err);
    });
  }
}
