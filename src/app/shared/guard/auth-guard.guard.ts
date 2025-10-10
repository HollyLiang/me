import { inject } from '@angular/core';
import { Auth, onAuthStateChanged } from '@angular/fire/auth';
import { Router } from '@angular/router';
import type { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = () => {
  const auth = inject(Auth);
  const router = inject(Router);

  return new Promise<boolean>((resolve) => {
    // 檢查使用者登入狀態
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // 已登入
        resolve(true);
      } else {
        // 未登入，導向 401 頁面
        router.navigate(['/status', '401']);
        resolve(false);
      }
    });
  });
};
