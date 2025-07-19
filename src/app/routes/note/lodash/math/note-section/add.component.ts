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
_.add(undefined, null); // ${_.add(undefined, null)}
\`\`\`

source
\`\`\`js
var add = createMathOperation(function(augend, addend) {
  return augend + addend;
}, 0);
\`\`\`
  `.trim();

  jsCode = `
\`\`\`js
5 + 3; // ${5 + 3}
NaN + 0; // ${NaN + 0}
Nan+ Infinity; // ${NaN + Infinity}
Infinity + Infinity; // ${Infinity + Infinity}
Infinity + -Infinity; // ${Infinity + -Infinity}
NaN + NaN; // ${NaN + NaN}
\`\`\`
  `.trim();

  linkData = `
> [\`lodash - createMathOperation()\`](https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L5220)
  `.trim();
}
