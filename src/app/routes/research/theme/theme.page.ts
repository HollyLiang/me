import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-research-theme',
  templateUrl: './theme.page.html',
  styleUrls: ['./theme.page.scss']
})

export class ResThemePage implements OnInit {
  fontSize = 10;

  mdThemeColor = `
  \`\`\`css
  .theme-section {
    padding: 16px;
    color: var(--foreground-color);
    background-color: var(--background-color);
  }

  .light {
    --foreground-color: #333;
    --background-color: #fff;
  }

  .dark {
    --foreground-color: #fff;
    --background-color: #333;
  }
\`\`\`
`;

  constructor() { }

  ngOnInit() { }

  onFontSizeChange(ev) {
    console.log(ev)
    document.documentElement.style.fontSize = ev + 'px';
    document.documentElement.style.lineHeight = ev + 'px';
  }
}
