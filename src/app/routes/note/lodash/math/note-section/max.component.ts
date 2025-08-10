import _ from 'lodash';
import { MarkdownModule } from 'ngx-markdown';

import { Component } from '@angular/core';

import { NoteTitleComponent } from '../../../title/title.component';

@Component({
  selector: 'app-note-lodash-math-max',
  standalone: true,
  imports: [MarkdownModule, NoteTitleComponent],
  template: `
    <app-note-title><h2>Max</h2></app-note-title>
    <p>最大值</p>

    <div class="d-flex flex-wrap">
      <div class="w50 p-right"><strong>Lodash</strong></div>
      <div class="w50 p-left"><strong>JavaScript</strong></div>
      <div class="w50 p-right"><markdown [data]="lodashCode"></markdown></div>
      <div class="w50 p-left"><markdown [data]="jsCode"></markdown></div>
    </div>
  `
})
export class NoteLodashMathMaxComponent {
  lodashCode = `
\`\`\`js
_.max([1, 2, 3]); // ${_.max([1, 2, 3])}
_.max([]); // ${_.max([])}
_.max([NaN, 1, 2]); // ${_.max([NaN, 1, 2])}
_.max([null, undefined, 1, 2]); // ${_.max([null, undefined, 1, 2])}
\`\`\`
  `.trim();

  jsCode = `
\`\`\`js
Math.max(1, 2, 3); // ${Math.max(1, 2, 3)}
Math.max(); // ${Math.max()}
Math.max(NaN, 1, 2); // ${Math.max(NaN, 1, 2)}
Math.max(null, undefined, 1, 2); // ${Math.max(null, undefined, 1, 2)}
\`\`\`
  `.trim();
}
