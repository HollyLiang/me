import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RouterOutletComponent } from './router-outlet/router-outlet.component';
import { MatButton } from '@angular/material/button';

@Component({
    selector: 'app-dialog',
    templateUrl: './dialog.component.html',
    styleUrls: ['./dialog.component.scss'],
    standalone: true,
    imports: [MatButton]
})
export class DialogComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  onOpenDialog() {
    this.dialog.open(RouterOutletComponent);
  }

}
