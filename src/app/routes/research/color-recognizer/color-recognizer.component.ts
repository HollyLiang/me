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
  nearestBaseColor?: { name: string; hex: string };

  private objectUrl?: string;
  private canvas?: HTMLCanvasElement;
  private ctx?: CanvasRenderingContext2D | null;
  private naturalWidth = 0;
  private naturalHeight = 0;

  private readonly baseColors = [
    { name: '黑色', hex: '#000000', r: 0, g: 0, b: 0 },
    { name: '深灰色', hex: '#333333', r: 51, g: 51, b: 51 },
    { name: '灰色', hex: '#808080', r: 128, g: 128, b: 128 },
    { name: '淺灰色', hex: '#D3D3D3', r: 211, g: 211, b: 211 },
    { name: '白色', hex: '#FFFFFF', r: 255, g: 255, b: 255 },
    { name: '紅色', hex: '#FF0000', r: 255, g: 0, b: 0 },
    { name: '綠色', hex: '#008000', r: 0, g: 128, b: 0 },
    { name: '藍色', hex: '#0000FF', r: 0, g: 0, b: 255 },
    { name: '黃色', hex: '#FFFF00', r: 255, g: 255, b: 0 },
    { name: '青色', hex: '#00FFFF', r: 0, g: 255, b: 255 },
    { name: '洋紫色', hex: '#FF00FF', r: 255, g: 0, b: 255 },
    { name: '淺橘色', hex: '#e8b470ff', r: 255, g: 165, b: 112 },
    { name: '橘色', hex: '#FFA500', r: 255, g: 165, b: 0 },
    { name: '紫色', hex: '#800080', r: 128, g: 0, b: 128 },
    { name: '紫色', hex: '#7e437e', r: 126, g: 67, b: 126 },
    { name: '棕色', hex: '#8B4513', r: 139, g: 69, b: 19 },
    { name: '粉紅色', hex: '#FFC0CB', r: 255, g: 192, b: 203 },
    { name: '萊姆綠', hex: '#00FF00', r: 0, g: 255, b: 0 },
    { name: '海軍藍', hex: '#000080', r: 0, g: 0, b: 128 },
    { name: '藍綠色', hex: '#008080', r: 0, g: 128, b: 128 }
  ];

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
    this.nearestBaseColor = this.findNearestBaseColor(r, g, b);
  }

  private findNearestBaseColor(r: number, g: number, b: number): { name: string; hex: string } {
    let min = Number.POSITIVE_INFINITY;
    let nearest = this.baseColors[0];
    for (const c of this.baseColors) {
      const dr = r - c.r;
      const dg = g - c.g;
      const db = b - c.b;
      const dist = dr * dr + dg * dg + db * db; // 省略開根號
      if (dist < min) {
        min = dist;
        nearest = c;
      }
    }
    return { name: nearest.name, hex: nearest.hex };
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
    this.nearestBaseColor = undefined;
    this.naturalWidth = this.naturalHeight = 0;
  }
}
