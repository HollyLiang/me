import _ from 'lodash';
import { MarkdownModule } from 'ngx-markdown';

import { Component } from '@angular/core';

import { NoteTitleComponent } from '../../../title/title.component';

@Component({
  selector: 'app-note-lodash-math-maxby',
  standalone: true,
  imports: [MarkdownModule, NoteTitleComponent],
  template: `
    <app-note-title><h2>Max By</h2></app-note-title>
    <p>依指定條件找出最大值</p>
    
    <div class="d-flex flex-wrap">
      <div class="w50 p-right"><strong>Lodash</strong></div>
      <div class="w50 p-left"><strong>JavaScript</strong></div>
      <div class="w50 p-right"><markdown [data]="lodashCode"></markdown></div>
      <div class="w50 p-left"><markdown [data]="jsCode"></markdown></div>
    </div>
  `
})
export class NoteLodashMathMaxByComponent {
  objects = [{ 'n': 1 }, { 'n': 2 }];

  lodashCode = `
\`\`\`js
var objects = [{ 'n': 1 }, { 'n': 2 }];

_.maxBy(objects, function(o) { return o.n; });
// => ${JSON.stringify(_.maxBy(this.objects, function (o) { return o.n }))}

_.maxBy(objects, 'n');
// => ${JSON.stringify(_.maxBy(this.objects, 'n'))}
\`\`\`
  `.trim();

  jsCode = `
\`\`\`js
const objects = [{ 'n': 1 }, { 'n': 2 }];

objects.reduce((max, item) => item.n > max.n ? item : max, this.objects[0]);
// => ${JSON.stringify(this.getJavascriptResult())}
\`\`\`
  `.trim();

  getJavascriptResult() {
    return this.objects.reduce((max, item) => item.n > max.n ? item : max, this.objects[0]);
  }
}
