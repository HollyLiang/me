import { NgFor } from '@angular/common';
import { AfterContentInit, Component, ElementRef, inject } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'app-note-outline',
  standalone: true,
  imports: [MatListModule, MatSidenavModule, NgFor],
  templateUrl: './outline.component.html',
  styleUrl: './outline.component.scss'
})
export class NoteOutlineComponent implements AfterContentInit {
  private el: ElementRef = inject(ElementRef);

  outline: Array<Node> = [];

  ngAfterContentInit(): void {
    this.setIdAndText();
  }

  setIdAndText(): void {
    const headings: NodeList = this.el.nativeElement.querySelectorAll('h2');
    headings.forEach((node) => {
      this.outline.push(node);
    });
  }

  onItemClick(item: Element): void {
    if (item) {
      console.dir(item);
      item.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
