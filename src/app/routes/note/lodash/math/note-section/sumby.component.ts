import _ from 'lodash';
import { MarkdownModule } from 'ngx-markdown';

import { Component } from '@angular/core';

import { NoteTitleComponent } from '../../../title/title.component';

@Component({
  selector: 'app-note-lodash-math-sumby',
  standalone: true,
  imports: [MarkdownModule, NoteTitleComponent],
  template: `
    <app-note-title><h2>Sum By</h2></app-note-title>
    <p>依指定條件加總</p>

    <div class="d-flex flex-wrap">
      <div class="w50 p-right"><strong>Lodash</strong></div>
      <div class="w50 p-left"><strong>JavaScript</strong></div>
      <div class="w50 p-right"><markdown [data]="lodashCode"></markdown></div>
      <div class="w50 p-left"><markdown [data]="jsCode"></markdown></div>
    </div>
  `
})
export class NoteLodashMathSumByComponent {
  objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];

  lodashCode = `
\`\`\`js
var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];

_.sumBy(this.objects, function(o) { return o.n });
// => ${_.sumBy(this.objects, function (o) { return o.n })}
_.sumBy(this.objects, 'n');
// => ${_.sumBy(this.objects, 'n')}
\`\`\`
  `.trim();

  jsCode = `
\`\`\`js
const objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];

const sumBy = this.objects.reduce((acc, obj) => acc + (obj.n ?? 0), 0);
// => ${this.getJavascriptSumBy()}
\`\`\`
  `.trim();

  getJavascriptSumBy() {
    return this.objects.reduce((acc, obj) => acc + (obj.n ?? 0), 0);
  }
}
