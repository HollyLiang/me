import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { OnInit, inject } from '@angular/core';
import { Auth, User, updateProfile } from '@angular/fire/auth';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { UserService } from '@hy/core';

@Component({
  selector: 'app-modify-display-name',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, MatFormFieldModule, MatInputModule, MatButton],
  template: `
  <div class="content">
    <h1 class="header">Modify Profile</h1>

    <form [formGroup]="profileForm" (ngSubmit)="onSubmit()">
      <mat-form-field appearance="fill">
        <mat-label>Display Name</mat-label>
        <input matInput formControlName="displayName" required>
        <mat-error *ngIf="profileForm.get('displayName')?.hasError('required')">
          Display Name is required
        </mat-error>
        <mat-error *ngIf="profileForm.get('displayName')?.hasError('minlength')">
          Minimum 3 characters
        </mat-error>
      </mat-form-field>


      <button mat-raised-button color="primary" type="submit" [disabled]="profileForm.invalid" class="w100">Save</button>
    </form>
  </div>
  `,
  styleUrls: ['./modify-display-name.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModifyDisplayNameComponent implements OnInit {
  private fb = inject(FormBuilder);
  private auth = inject(Auth);
  private router = inject(Router);
  private userService = inject(UserService);

  user: User | null = null;
  profileForm: FormGroup = this.fb.group({
    displayName: ['', [Validators.required, Validators.minLength(3)]],
  });

  ngOnInit() {
    this.user = this.auth.currentUser;
    if (this.user && this.user.displayName) {
      this.profileForm.patchValue({ displayName: this.user.displayName });
    }
  }

  onSubmit() {
    if (this.profileForm.valid && this.user) {
      const { displayName } = this.profileForm.value;
      updateProfile(this.user, { displayName })
        .then(() => {
          // 修改 UserInfo 中的 displayName
          this.userService.userInfo = {
            ...this.userService.userInfo,
            name: displayName
          };

          // 成功後轉至首頁，並無法使用上一頁功能
          this.router.navigateByUrl('/', { replaceUrl: true });
        })
        .catch((err) => {
          console.error('Failed to update display name', err);
        });
    }
  }
}
