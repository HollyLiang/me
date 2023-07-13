import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class HomePage implements OnInit {

  list = [
    {
      groupName: 'Features',
      pages: [
        { subject: 'Dialog with router-outlet', link: '/research/dialog' },
        { subject: 'OAuth', link: '/research/oauth' },
      ]
    },
    {
      groupName: 'SCSS',
      pages: [
        { subject: 'Font & Color Theme', link: '/research/theme' },
      ]
    },
    {
      groupName: 'Training',
      pages: [
        { subject: 'Lab 1', link: '/training/lab1' },
        { subject: 'Lab 2', link: '/training/lab2' },
      ]
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
