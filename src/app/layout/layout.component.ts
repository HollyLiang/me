import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from "./header/header.component";
import { MenuComponent } from './menu/menu.component';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  standalone: true,
  imports: [MatSidenavModule, MatIconModule, RouterOutlet, HeaderComponent, MenuComponent]
})
export class LayoutComponent {


}
