import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-training-lab3',
  templateUrl: './lab3.component.html',
  styleUrls: ['./lab3.component.scss'],
})
export class Lab3Component implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
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
