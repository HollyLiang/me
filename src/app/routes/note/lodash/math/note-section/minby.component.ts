import _ from 'lodash';
import { MarkdownModule } from 'ngx-markdown';

import { Component } from '@angular/core';

import { NoteTitleComponent } from '../../../title/title.component';

@Component({
  selector: 'app-note-lodash-math-minby',
  standalone: true,
  imports: [MarkdownModule, NoteTitleComponent],
  template: `
    <app-note-title><h2>Min By</h2></app-note-title>
    <p>依指定條件找出最小值</p>

    <div class="d-flex flex-wrap">
      <div class="w50 p-right"><strong>Lodash</strong></div>
      <div class="w50 p-left"><strong>JavaScript</strong></div>
      <div class="w50 p-right"><markdown [data]="lodashCode"></markdown></div>
      <div class="w50 p-left"><markdown [data]="jsCode"></markdown></div>
    </div>
  `
})
export class NoteLodashMathMinByComponent {
  objects = [{ 'n': 1 }, { 'n': 2 }];

  lodashCode = `
\`\`\`js
var objects = [{ 'n': 1 }, { 'n': 2 }];

_.minBy(objects, function(o) { return o.n; });
// => ${JSON.stringify(_.minBy(this.objects, function (o) { return o.n }))}

_.minBy(objects, 'n');
// => ${JSON.stringify(_.minBy(this.objects, 'n'))}
\`\`\`
  `.trim();

  jsCode = `
\`\`\`js
const objects = [{ 'n': 1 }, { 'n': 2 }];

objects.reduce((min, item) => item.n < min.n ? item : min, this.objects[0]);
// => ${JSON.stringify(this.getJavascriptResult())}
\`\`\`
  `.trim();

  getJavascriptResult() {
    return this.objects.reduce((min, item) => item.n < min.n ? item : min, this.objects[0]);
  }
}
