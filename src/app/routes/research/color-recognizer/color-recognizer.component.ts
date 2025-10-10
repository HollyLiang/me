import { NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButton } from '@angular/material/button';

import { ColorService } from './color.service';

@Component({
  selector: 'app-color-recognizer',
  standalone: true,
  imports: [
    NgIf,

    MatButton
  ],
  templateUrl: './color-recognizer.component.html',
  styleUrl: './color-recognizer.component.scss'
})
export class ColorRecognizerComponent {
  previewSrc: string | null = null;
  selectedFile?: File;
  selectedColor: string | null = null;
  selectedRgb?: { r: number; g: number; b: number; a: number };
  nearestColorName?: string;

  private objectUrl?: string;
  private canvas?: HTMLCanvasElement;
  private ctx?: CanvasRenderingContext2D | null;
  private naturalWidth = 0;
  private naturalHeight = 0;

  private displayCanvas?: HTMLCanvasElement;
  private displayCtx?: CanvasRenderingContext2D | null;

  log: string;

  private colorService = inject(ColorService);

  setPreviewSrc(file: File): void {
    if (this.objectUrl) URL.revokeObjectURL(this.objectUrl);
    this.objectUrl = URL.createObjectURL(file);

    const img = new Image();
    img.onload = () => {
      this.naturalWidth = img.naturalWidth;
      this.naturalHeight = img.naturalHeight;

      // 原始 canvas 用於取色
      const canvas = document.createElement('canvas');
      canvas.width = this.naturalWidth;
      canvas.height = this.naturalHeight;
      const ctx = canvas.getContext('2d');

      // 顯示 canvas 用於畫圓圈
      const displayCanvas = document.createElement('canvas');
      displayCanvas.width = this.naturalWidth;
      displayCanvas.height = this.naturalHeight;
      const displayCtx = displayCanvas.getContext('2d');

      if (ctx && displayCtx) {
        ctx.drawImage(img, 0, 0);
        displayCtx.drawImage(img, 0, 0);
        this.canvas = canvas;
        this.ctx = ctx;
        this.displayCanvas = displayCanvas;
        this.displayCtx = displayCtx;

        // 更新預覽圖片源為顯示 canvas
        this.previewSrc = displayCanvas.toDataURL();
      }
    };
    img.src = this.objectUrl;
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (!input.files || input.files.length === 0) return;
    this.selectedFile = input.files[0];
    this.setPreviewSrc(this.selectedFile);
  }

  onImageClick(event: MouseEvent): void {
    if (!this.ctx || !this.canvas || !this.displayCtx || !this.displayCanvas) return;
    const imgEl = event.target as HTMLImageElement;
    const x = Math.floor((event.offsetX / imgEl.clientWidth) * this.naturalWidth);
    const y = Math.floor((event.offsetY / imgEl.clientHeight) * this.naturalHeight);
    if (x < 0 || y < 0 || x >= this.naturalWidth || y >= this.naturalHeight) return;

    const data = this.ctx.getImageData(x, y, 1, 1).data;
    const [r, g, b, a] = data;
    this.selectedRgb = { r, g, b, a };
    this.selectedColor = this.colorService.rgbToHex(r, g, b);
    const result = this.colorService.findNearestColor(r, g, b);
    this.nearestColorName = result.colorName;
    this.log = result.log;

    // 重新繪製原圖（清除之前的圓圈）
    this.displayCtx.clearRect(0, 0, this.displayCanvas.width, this.displayCanvas.height);
    this.displayCtx.drawImage(this.canvas, 0, 0);

    // 計算高對比色
    const brightness = (r * 0.299 + g * 0.587 + b * 0.114) / 255;
    const circleColor = brightness > 0.5 ? '#000000' : '#FFFFFF';

    // 畫圓圈標示選中點
    this.displayCtx.strokeStyle = circleColor;
    this.displayCtx.lineWidth = Math.max(3, Math.min(this.naturalWidth, this.naturalHeight) / 200);
    this.displayCtx.beginPath();
    this.displayCtx.arc(x, y, Math.max(10, Math.min(this.naturalWidth, this.naturalHeight) / 50), 0, 2 * Math.PI);
    this.displayCtx.stroke();

    // 更新預覽圖片
    this.previewSrc = this.displayCanvas.toDataURL();
  }

  clearSelection(): void {
    this.selectedFile = undefined;
    this.previewSrc = null;
    if (this.objectUrl) URL.revokeObjectURL(this.objectUrl);
    this.objectUrl = undefined;
    this.canvas = undefined;
    this.ctx = null;
    this.selectedColor = null;
    this.selectedRgb = undefined;
    this.nearestColorName = undefined;
    this.naturalWidth = this.naturalHeight = 0;
    this.displayCanvas = undefined;
    this.displayCtx = null;
  }
}
