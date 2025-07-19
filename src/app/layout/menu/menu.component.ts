import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MatListModule, RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

}
