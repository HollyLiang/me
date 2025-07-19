import { Component } from '@angular/core';

import { NoteOutlineComponent } from '../../outline/outline.component';
import { NoteTitleComponent } from '../../title/title.component';
import { NoteLodashMathAddComponent } from './note-section/add.component';
import { NoteLodashMathCeilComponent } from './note-section/ceil.component';
import { NoteLodashMathDivideComponent } from './note-section/divide.component';

const noteBlock = [
  NoteLodashMathAddComponent,
  NoteLodashMathCeilComponent,
  NoteLodashMathDivideComponent
]

@Component({
  selector: 'app-math',
  standalone: true,
  imports: [NoteOutlineComponent, NoteTitleComponent, ...noteBlock],
  templateUrl: './math.component.html',
  styleUrl: './math.component.scss'
})
export class MathComponent {
  //   _.add
  // _.ceil
  // _.divide
  // _.floor
  // _.max
  // _.maxBy
  // _.mean
  // _.meanBy
  // _.min
  // _.minBy
  // _.multiply
  // _.round
  // _.subtract
  // _.sum
  // _.sumBy
}
