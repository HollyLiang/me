import { NgIf } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Auth, UserCredential, signInWithEmailAndPassword } from '@angular/fire/auth';
import { FormBuilder, FormsModule, ReactiveFormsModule, UntypedFormGroup, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatError, MatFormField } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { Router } from '@angular/router';
import { LineApiService } from '@api/auth/line.service';

import { FormErrorComponent } from '../../../shared/form-error/form-error.component';

@Component({
  selector: 'app-auth-signin',
  templateUrl: './signin.html',
  styleUrls: ['./signin.scss'],
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MatFormField, MatInput, MatError, FormErrorComponent, MatSlideToggle, NgIf, MatButton],
  providers: [LineApiService]
})
export class SignInPage implements OnInit {
  // 相依注入
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private auth = inject(Auth);

  // 初始化帳號
  // private initialAccount = this.userService.rememberMe ? this.userService.account : '';

  // 初始化表單
  signInForm: UntypedFormGroup = this.fb.group({
    account: ['', [Validators.required]],
    password: ['', [Validators.required]],
    // rememberMe: [this.userService.rememberMe]
  });

  errorMsg: string;

  ngOnInit(): void { }

  private signInFirebase(email: string, password: string): Promise<UserCredential> {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  onFormSubmit() {
    this.errorMsg = '';

    if (this.signInForm.valid) {
      const { account, password } = this.signInForm.value;

      // 先進行 Firebase 登入，再呼叫原本後端登入
      this.signInFirebase(account, password)
        .then(async (res) => {

          // 若沒有 displayName，導到修改頁面
          if (!res.user.displayName) {
            this.router.navigate(['/auth/modify-profile']);
          } else {
            this.router.navigate(['/']);
          }
        })
        .catch(() => {
          this.errorMsg = '登入失敗';
        });
    }
  }

  // // 新增使用者
  // addUser(user: { name: string; age: number }) {
  //   const usersRef = collection(this.firestore, 'users');
  //   return addDoc(usersRef, user);
  // }

  // 監聽所有使用者 -> 改為一次性抓取 users 集合全部文件
  // getUsers(): Promise<any[]> {
  //   const usersColRef = collection(this.fireStore, 'users');
  //   return getDocs(usersColRef)
  //     .then(snapshot =>
  //       snapshot.docs.map(d => ({
  //         id: d.id,
  //         ...d.data()
  //       }))
  //     );
  // }
}
