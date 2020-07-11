import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormErrorComponent } from './form-error/form-error.component';
import { MatModule } from './mat.module';


@NgModule({
  declarations: [
    FormErrorComponent
  ],
  imports: [
    CommonModule,
    MatModule
  ],
  exports: [
    MatModule,
    FormErrorComponent
  ]
})
export class SharedModule { }
