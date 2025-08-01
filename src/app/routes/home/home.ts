import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.html',
    styleUrls: ['./home.scss'],
    standalone: true,
    imports: [NgFor, RouterLink]
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
