import _ from 'lodash';
import { MarkdownModule } from 'ngx-markdown';

import { Component } from '@angular/core';

import { NoteTitleComponent } from '../../../title/title.component';

@Component({
  selector: 'app-note-lodash-math-floor',
  standalone: true,
  imports: [MarkdownModule, NoteTitleComponent],
  template: `
    <app-note-title><h2>Floor</h2></app-note-title>
    <p>無條件捨去</p>

    <div class="d-flex flex-wrap">
      <div class="w50 p-right"><strong>Lodash</strong></div>
      <div class="w50 p-left"><strong>JavaScript</strong></div>
      <div class="w50 p-right"><markdown [data]="lodashCode"></markdown></div>
      <div class="w50 p-left"><markdown [data]="jsCode"></markdown></div>
    </div>
  `
})
export class NoteLodashMathFloorComponent {
  lodashCode = `
\`\`\`js
_.floor(6.4); // ${_.floor(6.4)}
_.floor(-6.4); // ${_.floor(-6.4)}
_.floor(0.046, 2); // ${_.floor(0.046, 2)}
_.floor(4060, -2); // ${_.floor(4060, -2)}
\`\`\`
  `.trim();

  jsCode = `
\`\`\`js
Math.floor(6.4); // ${Math.floor(6.4)}
Math.floor(-6.4); // ${Math.floor(-6.4)}
Math.floor(0.046); // ${Math.floor(0.046)}

// 要完成 4060 -> 4000
Math.floor(4060 / 100) * 100; // ${Math.floor(4060 / 100) * 100}

\`\`\`
  `.trim();
}
