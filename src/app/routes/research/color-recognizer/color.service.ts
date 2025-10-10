import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  rgbToHsv(r: number, g: number, b: number): { h: number; s: number; v: number } {
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

  findNearestColor(r: number, g: number, b: number): { colorName: string; log: string } {
    const hsv = this.rgbToHsv(r, g, b);
    const { h, s, v } = hsv;
    const log = `色相: ${h} / 飽和度: ${s} / 明度: ${v}`;

    let prefix = '';
    // 改進深色判斷邏輯：結合明度和飽和度
    if (v < 0.3 || (v < 0.5 && s > 0.6)) {
      prefix = '深';
    } else if (s < 0.3 && v > 0.8) {
      prefix = '淺';
    }

    let color = '';

    if (v < 0.1) return { colorName: '黑色', log };
    if (s < 0.1) {
      if (v > 0.9) return { colorName: '白色', log };
      color = '灰色';
    }
    else if (h < 10 || h > 340) color = '紅色';
    else if (h < 45) {
      // 棕色判斷更精確：低明度且有一定飽和度
      if (v < 0.4 && s > 0.3) return { colorName: '棕色', log };
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
      // 粉紅/桃紅色判斷更精確
      if (v < 0.4 && s > 0.4) return { colorName: '桃紅色', log };
      else if (s < 0.4 && v > 0.8) return { colorName: '粉紅色', log };
      color = '紫紅色';
    }
    return { colorName: prefix + color, log };
  }

  rgbToHex(r: number, g: number, b: number): string {
    return '#' + [r, g, b].map(v => v.toString(16).padStart(2, '0')).join('');
  }
}
