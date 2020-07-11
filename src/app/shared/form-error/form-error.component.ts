import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-error',
  templateUrl: './form-error.component.html',
  host: {
    '[class.hy-form-error]': 'true',
  }
})
export class FormErrorComponent {
  @Input() control: FormControl;

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
