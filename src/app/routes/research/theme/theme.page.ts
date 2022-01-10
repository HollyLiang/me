import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-research-theme',
  templateUrl: './theme.page.html',
  styleUrls: ['./theme.page.scss']
})

export class ResThemePage implements OnInit {
  fontSize = 10;


  constructor() { }

  ngOnInit() { }

  onFontSizeChange(ev) {
    console.log(ev)
    document.documentElement.style.fontSize = ev + 'px';
    document.documentElement.style.lineHeight = ev + 'px';
  }
}
