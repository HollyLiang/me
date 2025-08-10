import _ from 'lodash';
import { MarkdownModule } from 'ngx-markdown';

import { Component } from '@angular/core';

import { NoteTitleComponent } from '../../../title/title.component';

@Component({
  selector: 'app-note-lodash-math-add',
  standalone: true,
  imports: [MarkdownModule, NoteTitleComponent],
  template: `
    <app-note-title><h2>Add</h2></app-note-title>
    <p>加法</p>

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
export class NoteLodashMathAddComponent {
  lodashCode = `
\`\`\`js
_.add(5, 3); // ${_.add(5, 3)}
_.add(NaN, 0); // ${_.add(NaN, 0)}
_.add(NaN, Infinity); // ${_.add(NaN, Infinity)}
_.add(Infinity, Infinity); // ${_.add(Infinity, Infinity)}
_.add(Infinity, -Infinity); // ${_.add(Infinity, -Infinity)}
_.add(NaN, NaN); // ${_.add(NaN, NaN)}

_.add(null, undefined); // ${_.add(null, undefined)}
_.add(null, null); // ${_.add(null, null)}
_.add(undefined, undefined); // ${_.add(undefined, undefined)}
\`\`\`

source
\`\`\`js
// 在 undefined 的情況下，default 會是 0
var add = createMathOperation(function(augend, addend) {
  return augend + addend;
}, 0);
\`\`\`
  `.trim();

  nullValue = null;
  undefinedValue = undefined;

  jsCode = `
\`\`\`js
5 + 3; // ${5 + 3}
NaN + 0; // ${NaN + 0}
NaN + Infinity; // ${NaN + Infinity}
Infinity + Infinity; // ${Infinity + Infinity}
Infinity + -Infinity; // ${Infinity + -Infinity}
NaN + NaN; // ${NaN + NaN}

null + undefined; // ${this.nullValue + this.undefinedValue}
null + null; // ${this.nullValue + this.nullValue}
undefined + undefined; // ${this.undefinedValue + this.undefinedValue}
\`\`\`
  `.trim();

  linkData = `
> [\`lodash - createMathOperation()\`](https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L16192)
  `.trim();
}
