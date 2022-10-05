import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-training-lab1',
  templateUrl: './lab1.component.html'
})
export class Lab1Component implements OnInit {

  name: string = 'Holly';
  result: string;

  constructor() { }

  ngOnInit() { }

  onSendClick($event) {
    this.result = $event;
  }
}
