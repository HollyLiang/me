import _ from 'lodash';
import { MarkdownModule } from 'ngx-markdown';

import { Component } from '@angular/core';

import { NoteTitleComponent } from '../../../title/title.component';

@Component({
  selector: 'app-note-lodash-math-multiply',
  standalone: true,
  imports: [MarkdownModule, NoteTitleComponent],
  template: `
    <app-note-title><h2>Multiply</h2></app-note-title>
    <p>乘法</p>

    <div class="d-flex flex-wrap">
      <div class="w50 p-right"><strong>Lodash</strong></div>
      <div class="w50 p-left"><strong>JavaScript</strong></div>
      <div class="w50 p-right"><markdown [data]="lodashCode"></markdown></div>
      <div class="w50 p-left"><markdown [data]="jsCode"></markdown></div>
    </div>
    <div class="link-data">
      <p><markdown [data]="linkData"></markdown></p>
    </div>
  `
})
export class NoteLodashMathMultiplyComponent {
  objects = [{ 'n': 1 }, { 'n': 2 }];

  lodashCode = `
\`\`\`js
_.multiply(6, 4); // ${_.multiply(6, 4)}
_.multiply(6, NaN); // ${_.multiply(6, NaN)}
_.multiply(6, Infinity); // ${_.multiply(6, Infinity)}
_.multiply(6, null); // ${_.multiply(6, null)}
_.multiply(6, undefined); // ${_.multiply(6, undefined)}
\`\`\`

source
\`\`\`js
// 在 undefined 的情況下，default 會是 1
var multiply = createMathOperation(function(multiplier, multiplicand) {
  return multiplier * multiplicand;
}, 1);
\`\`\`
  `.trim();

  nullValue = null;
  undefinedValue = undefined;

  jsCode = `
\`\`\`js
6 * 4; // ${6 * 4}
6 * NaN; // ${6 * NaN}
6 * Infinity; // ${6 * Infinity}
6 * null; // ${6 * this.nullValue}
6 * undefined; // ${6 * this.undefinedValue}
\`\`\`
  `.trim();

  linkData = `
> [\`lodash - createMathOperation()\`](https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L16427)
  `.trim();
}
