import { animate, transition, trigger } from '@angular/animations'; // 新增
import { Component, ElementRef, ViewChild, signal } from '@angular/core';

import { NoteTitleComponent } from './../../title/title.component';

@Component({
  selector: 'app-move',
  standalone: true,
  imports: [
    NoteTitleComponent,
  ],
  template: `
    <app-note-title><h2>Move Box</h2></app-note-title>
    <div class="wrapper">
      <div #area class="area" (click)="onAreaClick($event)">
        <div class="box"
             [@move]="boxState"
             [style.transform]="'translate(' + boxX() + 'px,' + boxY() + 'px)'">
        </div>
        <div class="hint">點擊此區域移動方塊</div>
      </div>
    </div>
  `,
  styles: [`
    .wrapper {
      display: flex;
      justify-content: center;
      padding: 24px 0;
    }
    .area {
      position: relative;
      width: 100%;
      max-width: 800px;
      height: 400px; /* 中心區域高度 400 */
      border: 2px dashed #999;
      border-radius: 12px;
      background:
        repeating-linear-gradient(0deg, #fafafa, #fafafa 10px, #f5f5f5 10px, #f5f5f5 20px);
      overflow: hidden;
      cursor: pointer;
      user-select: none;
    }
    .box {
      position: absolute;
      top: 0;
      left: 0;
      width: 60px;
      height: 60px;
      border-radius: 12px;
      background: linear-gradient(135deg,#4f46e5,#6366f1);
      box-shadow: 0 6px 14px -4px rgba(79,70,229,.55), 0 2px 4px -1px rgba(0,0,0,.25);
      pointer-events: none;
      transition: transform 350ms cubic-bezier(.4,0,.2,1);
    }
    .hint {
      position: absolute;
      top: 8px;
      right: 12px;
      font-size: 12px;
      color: #666;
      pointer-events: none;
    }
  `]
})
export class NoteAnimationsMoveComponent {
  @ViewChild('area', { static: true }) areaRef!: ElementRef<HTMLElement>;

  // 使用 signal 保存位置 (左上角偏移)
  private readonly half = 30; // box 半邊 (60/2)
  boxX = signal(0);
  boxY = signal(0);

  get boxState() {
    // 任何座標變化都觸發 '* => *' 動畫
    return `${this.boxX()}|${this.boxY()}`;
  }

  ngAfterViewInit() {
    // 初始放置在中央
    const el = this.areaRef.nativeElement;
    const rect = el.getBoundingClientRect();
    this.boxX.set((rect.width / 2) - this.half);
    this.boxY.set((rect.height / 2) - this.half);
  }

  onAreaClick(e: MouseEvent) {
    const areaEl = this.areaRef.nativeElement;
    const rect = areaEl.getBoundingClientRect();
    // 點擊位置相對區域左上角
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // 讓方塊中心對準點擊處
    let targetX = x - this.half;
    let targetY = y - this.half;

    // 邊界限制
    const maxX = rect.width - this.half * 2;
    const maxY = rect.height - this.half * 2;
    if (targetX < 0) targetX = 0;
    if (targetY < 0) targetY = 0;
    if (targetX > maxX) targetX = maxX;
    if (targetY > maxY) targetY = maxY;

    this.boxX.set(targetX);
    this.boxY.set(targetY);
  }
}
