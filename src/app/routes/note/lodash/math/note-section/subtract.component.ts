import _ from 'lodash';
import { MarkdownModule } from 'ngx-markdown';

import { Component } from '@angular/core';

import { NoteTitleComponent } from '../../../title/title.component';

@Component({
  selector: 'app-note-lodash-math-subtract',
  standalone: true,
  imports: [MarkdownModule, NoteTitleComponent],
  template: `
    <app-note-title><h2>Subtract</h2></app-note-title>
    <p>減法</p>

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
export class NoteLodashMathSubtractComponent {
  objects = [{ 'n': 1 }, { 'n': 2 }];

  lodashCode = `
\`\`\`js
_.subtract(6, 4); // ${_.subtract(6, 4)}
_.subtract(6, NaN); // ${_.subtract(6, NaN)}
_.subtract(6, Infinity); // ${_.subtract(6, Infinity)}
_.subtract(Infinity, 4); // ${_.subtract(Infinity, 4)}
_.subtract(6, null); // ${_.subtract(6, null)}
_.subtract(6, undefined); // ${_.subtract(6, undefined)}

_.subtract(null, null); // ${_.subtract(null, null)}
_.subtract(undefined, undefined); // ${_.subtract(undefined, undefined)}
\`\`\`

Source
\`\`\`js
// 在 undefined 的情況下，default 會是 0
var subtract = createMathOperation(function(minuend, subtrahend) {
  return minuend - subtrahend;
}, 0);
\`\`\`
  `.trim();

  nullValue = null;
  undefinedValue = undefined;

  jsCode = `
\`\`\`js
Math.subtract(6, 4); // ${6 - 4}
Math.subtract(6, NaN); // ${6 - NaN}
Math.subtract(6, Infinity); // ${6 - Infinity}
Math.subtract(Infinity, 4); // ${Infinity - 4}
Math.subtract(6, null); // ${6 - this.nullValue}
Math.subtract(6, undefined); // ${6 - this.undefinedValue}
\`\`\`
  `.trim();

  linkData = `
> [\`lodash - createMathOperation()\`](https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L16469)
  `.trim();
}
