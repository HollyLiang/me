import _ from 'lodash';
import { MarkdownModule } from 'ngx-markdown';

import { Component } from '@angular/core';

import { NoteTitleComponent } from '../../../title/title.component';

@Component({
  selector: 'app-note-lodash-math-round',
  standalone: true,
  imports: [MarkdownModule, NoteTitleComponent],
  template: `
    <app-note-title><h2>Round</h2></app-note-title>
    <p>四捨五入</p>
    
    <div class="d-flex flex-wrap">
      <div class="w50 p-right"><strong>Lodash</strong></div>
      <div class="w50 p-left"><strong>JavaScript</strong></div>
      <div class="w50 p-right"><markdown [data]="lodashCode"></markdown></div>
      <div class="w50 p-left"><markdown [data]="jsCode"></markdown></div>
    </div>
  `
})
export class NoteLodashMathRoundComponent {
  objects = [{ 'n': 1 }, { 'n': 2 }];

  lodashCode = `
\`\`\`js
_.round(4.006); // ${_.round(4.006)}

// 四捨五入六成雙，還是要自己處理
_.round(1.5); // ${_.round(1.5)}
_.round(2.5); // ${_.round(2.5)}

_.round(4.004, 2); // ${_.round(4.004, 2)}
_.round(4.005, 2); // ${_.round(4.005, 2)}
_.round(4.006, 2); // ${_.round(4.006, 2)}

_.round(4140, -2); // ${_.round(4140, -2)}
_.round(4150, -2); // ${_.round(4150, -2)}
_.round(4160, -2); // ${_.round(4160, -2)}
\`\`\`
  `.trim();

  jsCode = `
  \`\`\`js
Math.round(4.006); // ${Math.round(4.006)}
Math.round(1.5); // ${Math.round(1.5)}
Math.round(2.5); // ${Math.round(2.5)}
\`\`\`
  `.trim();

}
