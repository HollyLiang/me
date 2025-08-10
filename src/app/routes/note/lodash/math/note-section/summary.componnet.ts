import { MarkdownModule } from 'ngx-markdown';

import { Component, OnInit } from '@angular/core';

import { NoteTitleComponent } from '../../../title/title.component';

@Component({
  selector: 'app-note-lodash-math-summary',
  standalone: true,
  imports: [MarkdownModule, NoteTitleComponent],
  template: `
  <app-note-title><h2>Summary</h2></app-note-title>
  <p>
    基本 Lodash 數學函數，都有先經過數值的處理，可參考
    <a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L5220">createMathOperation</a>。
  </p>
  <p>
    參考來源: <a href="https://lodash.com/docs/4.17.15#add" target="_blank">
      Lodash Math Documentation
    </a>
  </p>
  <markdown [data]="createMathOperation"></markdown>
  <markdown [data]="baseToNumber"></markdown>
  `
})

export class NoteLodashMathSummaryComponent {

  createMathOperation = `
**createMathOperation**
\`\`\`js
// 任何一個值為 undefined 時，會回傳另外一個有值的內容
// 兩個值都為 undefined 時，會回傳 defaultValue
function createMathOperation(operator, defaultValue) {
  return function(value, other) {
    var result;
    if (value === undefined && other === undefined) {
      return defaultValue;
    }
    if (value !== undefined) {
      result = value;
    }
    if (other !== undefined) {
      if (result === undefined) {
        return other;
      }
      if (typeof value == 'string' || typeof other == 'string') {
        value = baseToString(value);
        other = baseToString(other);
      } else {
        value = baseToNumber(value);
        other = baseToNumber(other);
      }
      result = operator(value, other);
    }
    return result;
  };
}
\`\`\`
  `.trim();

  baseToNumberFunc(value: any): number {
    if (typeof value == 'number') {
      return value;
    }
    return +value;
  }

  get baseToNumber() {
    return `
**baseToNumber**
\`\`\`js
function baseToNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  return +value;
}

baseToNumber('123'); // ${this.baseToNumberFunc('123')}
baseToNumber(true); // ${this.baseToNumberFunc(true)}
baseToNumber(false); // ${this.baseToNumberFunc(false)}
baseToNumber(null); // ${this.baseToNumberFunc(null)}
baseToNumber(undefined); // ${this.baseToNumberFunc(undefined)}
baseToNumber(NaN); // ${this.baseToNumberFunc(NaN)}
baseToNumber(Infinity); // ${this.baseToNumberFunc(Infinity)}

\`\`\`
  `.trim();
  }

}
