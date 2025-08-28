import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';

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

  log: string;

  setPreviewSrc(file: File): void {
    if (this.objectUrl) URL.revokeObjectURL(this.objectUrl);
    this.objectUrl = URL.createObjectURL(file);
    this.previewSrc = this.objectUrl;

    const img = new Image();
    img.onload = () => {
      this.naturalWidth = img.naturalWidth;
      this.naturalHeight = img.naturalHeight;
      const canvas = document.createElement('canvas');
      canvas.width = this.naturalWidth;
      canvas.height = this.naturalHeight;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(img, 0, 0);
        this.canvas = canvas;
        this.ctx = ctx;
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
    if (!this.ctx || !this.canvas || !this.previewSrc) return;
    const imgEl = event.target as HTMLImageElement;
    const x = Math.floor((event.offsetX / imgEl.clientWidth) * this.naturalWidth);
    const y = Math.floor((event.offsetY / imgEl.clientHeight) * this.naturalHeight);
    if (x < 0 || y < 0 || x >= this.naturalWidth || y >= this.naturalHeight) return;
    const data = this.ctx.getImageData(x, y, 1, 1).data;
    const [r, g, b, a] = data;
    this.selectedRgb = { r, g, b, a };
    this.selectedColor = this.rgbToHex(r, g, b);
    this.nearestColorName = this.findNearestColor(r, g, b);
  }

  private findNearestColor(r: number, g: number, b: number): string {
    const hsv = this.rgbToHsv(r, g, b);
    const { h, s, v } = hsv;
    this.log = `色相: ${h} / 飽和度: ${s} / 明度: ${v}`;

    let prefix = '';
    if (v < 0.4) prefix = '深';
    else if (s < 0.4 && v > 0.8) prefix = '淺';
    let color = '';

    if (v < 0.1) return '黑色';
    if (s < 0.1) {
      if (v > 0.9) return '白色';
      color = '灰色';
    }
    else if (h < 10 || h > 340) color = '紅色';
    else if (h < 45) {
      if (prefix === '深') return '棕色';
      color = '橘色';
    }
    else if (h < 70) color = '黃色';
    else if (h < 100) color = '黃綠色';
    else if (h < 130) color = '綠色';
    else if (h < 175) color = '藍綠色';
    else if (h < 210) color = '水藍色';
    else if (h < 270) color = '藍色';
    else if (h < 300) color = '紫色';
    else {
      if (prefix === '深') return '桃紅色';
      else if (prefix === '淺') return '粉紅色';
      color = '紫紅色';
    }
    return prefix + color;
  }

  private rgbToHsv(r: number, g: number, b: number): { h: number; s: number; v: number } {
    const rn = r / 255;
    const gn = g / 255;
    const bn = b / 255;

    const max = Math.max(rn, gn, bn);
    const min = Math.min(rn, gn, bn);
    const delta = max - min;

    // Hue
    let h: number;
    if (delta === 0) {
      h = 0;
    } else if (max === rn) {
      h = 60 * (((gn - bn) / delta) % 6);
    } else if (max === gn) {
      h = 60 * ((bn - rn) / delta + 2);
    } else {
      h = 60 * ((rn - gn) / delta + 4);
    }
    if (h < 0) h += 360;

    // Saturation
    const s = max === 0 ? 0 : delta / max;

    // Value
    const v = max;

    // 回傳：h 0-360, s / v 0-1
    return { h, s, v };
  }

  private rgbToHex(r: number, g: number, b: number): string {
    return '#' + [r, g, b].map(v => v.toString(16).padStart(2, '0')).join('');
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
  }
}
