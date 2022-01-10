import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormErrorComponent } from './form-error/form-error.component';
import { MatModule } from './mat.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const BASIC = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
];

@NgModule({
  declarations: [
    FormErrorComponent
  ],
  imports: [
    ...BASIC,
    MatModule
  ],
  exports: [
    ...BASIC,
    MatModule,
    FormErrorComponent
  ]
})
export class SharedModule { }
