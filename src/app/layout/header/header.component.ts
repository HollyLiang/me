import { NgIf, NgTemplateOutlet } from '@angular/common';
import { Component, EventEmitter, Output, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
import { AuthApiService } from '@api/auth/auth.service';
import { UserService } from '@hy/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, RouterLink, NgTemplateOutlet, NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Output() menuClick = new EventEmitter<void>();

  private authAPI = inject(AuthApiService);
  private userService = inject(UserService);

  isSignIn: boolean = this.userService.accessToken && true;
  userInfo = this.userService.userInfo;

  onSignOutClick() {
    this.authAPI.signOut().subscribe(() => {
      this.isSignIn = false;
    });
  }
}
