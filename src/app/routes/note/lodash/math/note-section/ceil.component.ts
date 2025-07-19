import _ from 'lodash';
import { MarkdownModule } from 'ngx-markdown';

import { Component } from '@angular/core';

import { NoteTitleComponent } from '../../../title/title.component';

@Component({
  selector: 'app-note-lodash-math-ceil',
  standalone: true,
  imports: [MarkdownModule, NoteTitleComponent],
  template: `
    <app-note-title><h2>Ceil</h2></app-note-title>
    <div class="d-flex flex-wrap">
      <div class="w50 p-right"><strong>Lodash</strong></div>
      <div class="w50 p-left"><strong>JavaScript</strong></div>
      <div class="w50 p-right"><markdown [data]="lodashCode"></markdown></div>
      <div class="w50 p-left"><markdown [data]="jsCode"></markdown></div>
    </div>
  `
})
export class NoteLodashMathCeilComponent {
  lodashCode = `
\`\`\`ts
_.ceil(5.1); // ${_.ceil(5.1)}
_.ceil(5.9); // ${_.ceil(5.9)}
_.ceil(-5.1); // ${_.ceil(-5.1)}
\`\`\`
  `.trim();

  jsCode = `
\`\`\`ts
Math.ceil(5.1); // ${Math.ceil(5.1)}
Math.ceil(5.9); // ${Math.ceil(5.9)}
Math.ceil(-5.1); // ${Math.ceil(-5.1)}
\`\`\`
  `.trim();
}
