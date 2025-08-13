import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';

import { NoteTitleComponent } from '../../title/title.component';

@Component({
  selector: 'app-animations-trigger-transition',
  standalone: true,
  imports: [
    FormsModule,

    MatButton,
    MatSliderModule,

    NoteTitleComponent,
  ],
  template: `
  <app-note-title>
    <h2>Trigger and Transition</h2>
  </app-note-title>

  <div class="p-bottom">
    <button mat-raised-button color="primary" class="m-right" (click)="toggle()">
      {{ isOpen ? '關閉' : '開啟' }}
    </button>
    <mat-slider min="100" max="2000" step="100" discrete style="width: 400px">
      <input matSliderThumb [(ngModel)]="duration">
    </mat-slider>
  </div>
  <div class="p" [@panel]="{ value: isOpen ? 'open' : 'closed', params: { duration: duration } }">
    動畫執行時間長度: {{ duration }} 毫秒
  </div>
`,
  animations: [
    trigger('panel', [
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '80px',
        opacity: 0.4,
        backgroundColor: '#ccc'
      })),
      transition('open <=> closed', [
        animate('{{duration}}ms ease-in-out')
      ], { params: { duration: 300 } })
    ])
  ]
})

export class NoteAnimationsTriggerTransitionComponent implements OnInit {

  isOpen = false;
  duration = 300;

  toggle() { this.isOpen = !this.isOpen; }

  constructor() { }

  ngOnInit() { }
}
