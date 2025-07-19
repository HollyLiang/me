import { AfterContentInit, Component, ElementRef, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-note-title',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './title.component.html',
  styleUrl: './title.component.scss'
})
export class NoteTitleComponent implements AfterContentInit {
  private el: ElementRef = inject(ElementRef);

  link: string;

  ngAfterContentInit(): void {
    console.dir(this.el);
    const anchorId = this.el.nativeElement.id || this.el.nativeElement.innerText;
    this.link = `${anchorId}`;
  }
}
