import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { Auth, onAuthStateChanged } from '@angular/fire/auth';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
  standalone: true,
  imports: [NgFor, RouterLink, MatCardModule, MatButtonModule,]
})
export class HomePage {
  private auth = inject(Auth);

  list = [
    {
      groupName: 'Features',
      pages: [
        { subject: 'Dialog with router-outlet', link: '/research/dialog' },
        { subject: 'OAuth', link: '/research/oauth' },
        { subject: '色彩識別器', link: '/research/color-recognizer' },
      ]
    },
    {
      groupName: 'SCSS',
      pages: [
        { subject: 'Font & Color Theme', link: '/research/theme' },
      ]
    },
    {
      groupName: 'Training',
      pages: [
        { subject: 'Lab 1', link: '/training/lab1' },
        { subject: 'Lab 2', link: '/training/lab2' },
      ]
    },
  ]

  ngOnInit(): void {
    // 僅在登入狀態下顯示
    // Animation、Lodash、JP Books
    // 使用 onAuthStateChanged 更新 userInfo
    onAuthStateChanged(this.auth, () => {
      const isSignIn = !!this.auth.currentUser;
      this.list.push(...(isSignIn ? [
        {
          groupName: 'Angular',
          pages: [
            { subject: 'Animation', link: '/note/animations' },
          ]
        },
        {
          groupName: 'Lodash',
          pages: [
            { subject: 'Math', link: '/note/lodash/math' },
          ]
        },
        {
          groupName: 'JP',
          pages: [
            { subject: 'Manage', link: '/note/jp/manage' },
            { subject: 'Book', link: '/note/jp/book' },
          ]
        }
      ] : []));
    });
  }
}
