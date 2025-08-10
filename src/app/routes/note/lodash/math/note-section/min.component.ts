import _ from 'lodash';
import { MarkdownModule } from 'ngx-markdown';

import { Component } from '@angular/core';

import { NoteTitleComponent } from '../../../title/title.component';

@Component({
  selector: 'app-note-lodash-math-min',
  standalone: true,
  imports: [MarkdownModule, NoteTitleComponent],
  template: `
    <app-note-title><h2>Min</h2></app-note-title>
    <p>最小值</p>
    
    <div class="d-flex flex-wrap">
      <div class="w50 p-right"><strong>Lodash</strong></div>
      <div class="w50 p-left"><strong>JavaScript</strong></div>
      <div class="w50 p-right"><markdown [data]="lodashCode"></markdown></div>
      <div class="w50 p-left"><markdown [data]="jsCode"></markdown></div>
    </div>
  `
})
export class NoteLodashMathMinComponent {
  lodashCode = `
\`\`\`js
_.min([1, 2, 3]); // ${_.min([9, 6, 3, 8])}
_.min([]); // ${_.min([])}
_.min([NaN, 1, 2]); // ${_.min([NaN, 1, 2])}
_.min([null, undefined, 1, 2]); // ${_.min([null, undefined, 1, 2])}
\`\`\`
  `.trim();

  jsCode = `
\`\`\`js
Math.min(1, 2, 3); // ${Math.min(9, 6, 3, 8)}
Math.min(); // ${Math.min()}
Math.min(NaN, 1, 2); // ${Math.min(NaN, 1, 2)}
Math.min(null, undefined, 1, 2); // ${Math.min(null, undefined, 1, 2)}
\`\`\`
  `.trim();
}
