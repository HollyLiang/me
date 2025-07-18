import { Component, Input } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-form-error',
    templateUrl: './form-error.component.html',
    host: {
        '[class.hy-form-error]': 'true',
    },
    standalone: true,
    imports: [NgIf]
})
export class FormErrorComponent {
  @Input() control: UntypedFormControl;

  @Input() requiredText = 'Required';
  @Input() formatIncorrectText = 'Email Format incorrect';

  /**
   * errors: {
   *  maxlength: {
   *    requiredLength: 50
   *  }
   * }
   */
  @Input() maxlengthText = 'Over max length';

  /**
   * Error Values
   * errors: {
   *  min: {
   *    min: 255
   *  }
   * }
   *
   * errors: {
   *  max: {
   *    max: 255
   *  }
   * }
   */
  @Input() rangeText = 'Over limit';

}
