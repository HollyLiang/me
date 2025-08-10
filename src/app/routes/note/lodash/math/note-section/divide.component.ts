import _ from 'lodash';
import { MarkdownModule } from 'ngx-markdown';

import { Component } from '@angular/core';

import { NoteTitleComponent } from '../../../title/title.component';

@Component({
  selector: 'app-note-lodash-math-divide',
  standalone: true,
  imports: [MarkdownModule, NoteTitleComponent],
  template: `
    <app-note-title><h2>Divide</h2></app-note-title>
    <p>除法</p>

    <div class="d-flex flex-wrap">
      <div class="w50 p-right"><strong>Lodash</strong></div>
      <div class="w50 p-left"><strong>JavaScript</strong></div>
      <div class="w50 p-right"><markdown [data]="lodashCode"></markdown></div>
      <div class="w50 p-left"><markdown [data]="jsCode"></markdown></div>
    </div>
    <div class="link-data">
      <markdown [data]="linkData"></markdown>
    </div>
  `
})
export class NoteLodashMathDivideComponent {
  lodashCode = `
\`\`\`js
_.divide(6, 3); // ${_.divide(6, 3)}
_.divide(6, 0); // ${_.divide(6, 0)}
_.divide(-6, 3); // ${_.divide(-6, 3)}
_.divide(0, 0); // ${_.divide(0, 0)}
\`\`\`

source
\`\`\`js
var divide = createMathOperation(function(dividend, divisor) {
  return dividend / divisor;
}, 1);
\`\`\`
  `.trim();

  jsCode = `
\`\`\`js
6 / 3; // ${6 / 3}
6 / 0; // ${6 / 0}
-6 / 3; // ${-6 / 3}

0 / 0; // ${0 / 0}
\`\`\`
  `.trim();

  linkData = `
> [\`lodash - createMathOperation()\`](https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L5220)
  `.trim();
}
