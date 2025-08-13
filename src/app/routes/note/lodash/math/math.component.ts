import { isSymbol } from 'lodash';
import { MarkdownModule } from 'ngx-markdown';

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { NoteOutlineComponent } from '../../outline/outline.component';
import { NoteTitleComponent } from '../../title/title.component';
import { NoteLodashMathAddComponent } from './note-section/add.component';
import { NoteLodashMathCeilComponent } from './note-section/ceil.component';
import { NoteLodashMathDivideComponent } from './note-section/divide.component';
import { NoteLodashMathFloorComponent } from './note-section/floor.component';
import { NoteLodashMathMaxComponent } from './note-section/max.component';
import { NoteLodashMathMaxByComponent } from './note-section/maxby.component';
import { NoteLodashMathMinComponent } from './note-section/min.component';
import { NoteLodashMathMinByComponent } from './note-section/minby.component';
import { NoteLodashMathMultiplyComponent } from './note-section/multiply.component copy';
import { NoteLodashMathRoundComponent } from './note-section/round.component';
import { NoteLodashMathSubtractComponent } from './note-section/subtract.component';
import { NoteLodashMathSumComponent } from './note-section/sum.component';
import { NoteLodashMathSumByComponent } from './note-section/sumby.component';
import { NoteLodashMathSummaryComponent } from './note-section/summary.componnet';

const NOTE_BLOCKS = [
  NoteLodashMathSummaryComponent,
  NoteLodashMathAddComponent,
  NoteLodashMathCeilComponent,
  NoteLodashMathDivideComponent,
  NoteLodashMathFloorComponent,
  NoteLodashMathMaxComponent,
  NoteLodashMathMaxByComponent,
  NoteLodashMathMinComponent,
  NoteLodashMathMinByComponent,
  NoteLodashMathMultiplyComponent,
  NoteLodashMathRoundComponent,
  NoteLodashMathSubtractComponent,
  NoteLodashMathSumComponent,
  NoteLodashMathSumByComponent,
]

@Component({
  selector: 'app-lodash-math',
  standalone: true,
  imports: [
    CommonModule,

    NoteOutlineComponent,
    NoteTitleComponent,

    ...NOTE_BLOCKS],
  templateUrl: './math.component.html',
  styleUrl: './math.component.scss'
})
export class MathComponent {
  sections = NOTE_BLOCKS;
}
