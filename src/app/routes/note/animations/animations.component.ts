import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { NoteOutlineComponent } from '../outline/outline.component';
import { NoteTitleComponent } from '../title/title.component';
import { NoteAnimationsFlyInOutComponent } from './note-section/fly-in-out.component';
import { NoteAnimationsMoveComponent } from './note-section/move.component';
import { NoteAnimationsTriggerTransitionComponent } from './note-section/trigger-transition.component';

const NOTE_BLOCKS = [
  NoteAnimationsTriggerTransitionComponent,
  NoteAnimationsFlyInOutComponent,
  NoteAnimationsMoveComponent,
]

@Component({
  selector: 'app-animations',
  standalone: true,
  imports: [
    CommonModule,

    NoteOutlineComponent,
    NoteTitleComponent,

    ...NOTE_BLOCKS,
  ],
  templateUrl: 'animations.component.html',
  styleUrls: ['animations.component.scss'],
})
export class AnimationsComponent {
  sections = NOTE_BLOCKS;
}
