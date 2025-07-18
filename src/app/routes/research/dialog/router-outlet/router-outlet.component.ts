import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-router-outlet',
    templateUrl: './router-outlet.component.html',
    styleUrls: ['./router-outlet.component.scss'],
    standalone: true,
    imports: [RouterLink, RouterOutlet]
})
export class RouterOutletComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
