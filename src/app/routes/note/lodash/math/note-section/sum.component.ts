import _ from 'lodash';
import { MarkdownModule } from 'ngx-markdown';

import { Component } from '@angular/core';

import { NoteTitleComponent } from '../../../title/title.component';

@Component({
  selector: 'app-note-lodash-math-sum',
  standalone: true,
  imports: [MarkdownModule, NoteTitleComponent],
  template: `
    <app-note-title><h2>Sum</h2></app-note-title>
    <p>加總</p>
    
    <div class="d-flex flex-wrap">
      <div class="w50 p-right"><strong>Lodash</strong></div>
      <div class="w50 p-left"><strong>JavaScript</strong></div>
      <div class="w50 p-right"><markdown [data]="lodashCode"></markdown></div>
      <div class="w50 p-left"><markdown [data]="jsCode"></markdown></div>
    </div>
  `
})
export class NoteLodashMathSumComponent {
  lodashCode = `
\`\`\`js
_.sum([8, 9, 6, 4]); // ${_.sum([8, 9, 6, 4])}
_.sum([8, 9, 6, 4, NaN]); // ${_.sum([8, 9, 6, 4, NaN])}
_.sum([8, 9, 6, 4, Infinity]); // ${_.sum([8, 9, 6, 4, Infinity])}
_.sum([8, 9, 6, 4, null]); // ${_.sum([8, 9, 6, 4, null])}
_.sum([8, 9, 6, 4, undefined]); // ${_.sum([8, 9, 6, 4, undefined])}
\`\`\`
  `.trim();

  nullValue = null;
  undefinedValue = undefined;

  jsCode = `
\`\`\`js
Math.sum(8, 9, 6, 4); // ${8 + 9 + 6 + 4}
Math.sum(8, 9, 6, 4, NaN); // ${8 + 9 + 6 + 4 + NaN}
Math.sum(8, 9, 6, 4, Infinity); // ${8 + 9 + 6 + 4 + Infinity}
Math.sum(8, 9, 6, 4, null); // ${8 + 9 + 6 + 4 + this.nullValue}
Math.sum(8, 9, 6, 4, undefined); // ${8 + 9 + 6 + 4 + this.undefinedValue}
\`\`\`
  `.trim();
}
