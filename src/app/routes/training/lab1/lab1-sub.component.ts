import { Component, Input, OnInit, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';
import { MatFormField } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';

@Component({
    selector: 'app-training-lab1-sub',
    templateUrl: './lab1-sub.component.html',
    styleUrls: ['./lab1-sub.component.scss'],
    standalone: true,
    imports: [MatFormField, MatInput, FormsModule, MatButton]
})
export class Lab1SubComponent implements OnInit, OnChanges {

  @Input() text: string;
  @Output() sendClick = new EventEmitter<string>();

  isFirstChange: boolean;
  previousValue: any;
  currentValue: any;

  constructor() { }

  ngOnInit() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.isFirstChange = changes.text.isFirstChange();
    this.previousValue = changes.text.previousValue;
    this.currentValue = changes.text.currentValue;
  }

  onSendClick() {
    this.sendClick.emit(this.text);
  }
}
