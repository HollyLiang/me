import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormErrorComponent } from './form-error/form-error.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const BASIC = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
];

@NgModule({
    imports: [
    ...BASIC,
    FormErrorComponent
],
    exports: [
    ...BASIC,
    FormErrorComponent
]
})
export class SharedModule { }
