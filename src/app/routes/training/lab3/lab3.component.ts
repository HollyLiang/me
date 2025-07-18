import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UntypedFormGroup, UntypedFormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MatFormField, MatLabel, MatSuffix, MatPrefix } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatDatepickerInput, MatDatepickerToggle, MatDatepicker } from '@angular/material/datepicker';
import { MatButton } from '@angular/material/button';

@Component({
    selector: 'app-training-lab3',
    templateUrl: './lab3.component.html',
    styleUrls: ['./lab3.component.scss'],
    standalone: true,
    imports: [
        FormsModule,
        ReactiveFormsModule,
        MatFormField,
        MatLabel,
        MatInput,
        MatDatepickerInput,
        MatDatepickerToggle,
        MatSuffix,
        MatDatepicker,
        MatPrefix,
        MatButton,
    ],
})
export class Lab3Component implements OnInit {
  form: UntypedFormGroup;

  constructor(
    private fb: UntypedFormBuilder,
    private http: HttpClient,
    private router: Router,
  ) {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      author: ['', Validators.required],
      press: ['', Validators.required],
      publishDate: new Date(),
      price: 500,
      discount: 1,
    });
  }


  ngOnInit(): void { }

  onDoneClick() {
    if (this.form.valid) {
      const body = this.form.value;
      this.http.post('~/api/book', body).toPromise().then(() => {
        this.router.navigateByUrl('/training/lab2');
      });
    }
  }
}
