import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { Auth, User, updateProfile } from '@angular/fire/auth';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { UserService } from '@hy/core';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, NgIf],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileComponent implements OnInit {
  private auth = inject(Auth);
  private fb = inject(FormBuilder);
  private userService = inject(UserService);

  profileForm: FormGroup = this.fb.group({
    displayName: ['', [Validators.required, Validators.minLength(3)]],
  });

  photoURL: string | null = null;
  email: string | null = null;

  ngOnInit(): void {
    const user = this.auth.currentUser;
    if (user) {
      this.photoURL = user.photoURL;
      this.email = user.email;
      this.profileForm.patchValue({ displayName: user.displayName });
    }
  }

  onSave() {
    const user = this.auth.currentUser;
    if (user && this.profileForm.valid) {
      const { displayName } = this.profileForm.value;
      updateProfile(user, { displayName })
        .then(() => {
          this.userService.updateUserInfo();
        })
        .catch((err) => {
          console.error('Failed to update display name', err);
        });
    }
  }
}
