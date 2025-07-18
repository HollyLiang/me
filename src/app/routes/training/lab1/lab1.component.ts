import { Component, OnInit } from '@angular/core';
import { MatFormField } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { Lab1SubComponent } from './lab1-sub.component';

@Component({
    selector: 'app-training-lab1',
    templateUrl: './lab1.component.html',
    standalone: true,
    imports: [MatFormField, MatInput, FormsModule, Lab1SubComponent]
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
