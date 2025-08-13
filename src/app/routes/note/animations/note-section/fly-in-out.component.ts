import {
  animate,
  state,
  style,
  transition,
  trigger,
} from "@angular/animations";
import { NgFor, NgIf } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { MatButton, MatIconButton } from "@angular/material/button";
import { MatIcon } from "@angular/material/icon";

import { NoteTitleComponent } from "../../title/title.component";

@Component({
  selector: "app-animations-fly-in-out",
  standalone: true,
  imports: [
    NgIf,
    NgFor,

    MatButton,
    MatIconButton,
    MatIcon,

    NoteTitleComponent
  ],
  template: `
    <app-note-title><h2>Fly In-Out</h2></app-note-title>
    <div class="toolbar">
      <button mat-raised-button color="primary" (click)="add()">新增項目</button>
      <button mat-raised-button color="primary" class="m-left" (click)="clear()" [disabled]="items.length === 0">清空</button>
    </div>

    <ul class="list no-style no-m p-v">
      <li
        *ngFor="let item of items"
        [@flyInOut]
        (@flyInOut.start)="onStart(item, $event)"
        (@flyInOut.done)="onDone(item, $event)"
      >
        <div class="item d-flex display-center">
          <span class="flex-1">{{ item }}</span>
          <button mat-icon-button color="primary" (click)="remove(item)">
            <mat-icon>delete</mat-icon>
          </button>
        </div>
      </li>
    </ul>

    <small *ngIf="logs.length">
      動畫紀錄：
      <ul class="no-style no-m no-p">
        <li *ngFor="let l of logs.slice(-5)">{{ l }}</li>
      </ul>
    </small>
  `,
  animations: [
    trigger("flyInOut", [
      state("in", style({ transform: "translateX(0)", height: "*", padding: "*" })),
      transition("void => *", [
        style({ transform: "translateX(-100%)", height: "0", opacity: 0 }),
        animate("400ms ease", style({ transform: "translateX(0)", height: "*", padding: "*", opacity: 1 })),
      ]),
      transition("* => void", [
        animate("400ms ease", style({ transform: "translateX(100%)", height: "0", padding: "0", opacity: 0 })),
      ]),
    ]),
  ],
  styles: [`
    :host { display:block; padding:8px; border-radius:6px; overflow: hidden }
    .list li { padding: .5rem 0; }
    .list li .item { padding:6px 10px; background:#fafafa; border:1px solid #e0e0e0; border-radius:4px; }
    .list li button { margin-left:auto; }
    .log { list-style:none; padding:0; margin:4px 0 0; font-size:12px; opacity:.75; }
  `]
})
export class NoteAnimationsFlyInOutComponent implements OnInit {
  items: string[] = ["Angular", "React", "Vue"];
  private counter = 0;
  logs: string[] = [];

  ngOnInit() { }

  add() {
    this.items.push("Item " + ++this.counter);
  }

  remove(item: string) {
    this.items = this.items.filter((i) => i !== item);
  }

  clear() {
    this.items = [];
  }

  onStart(item: string, e: any) {
    this.logs.push(`[start] ${item} phase=${e.phaseName} state=${e.toState}`);
  }

  onDone(item: string, e: any) {
    this.logs.push(`[done]  ${item} phase=${e.phaseName} state=${e.toState}`);
  }
}
