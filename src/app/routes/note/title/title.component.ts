import { CommonModule } from '@angular/common';
import { AfterContentInit, Component, ContentChild, ElementRef, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-note-title',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './title.component.html',
  styleUrl: './title.component.scss'
})
export class NoteTitleComponent implements AfterContentInit {
  private el = inject(ElementRef);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  anchorId: string;
  isHeading1: boolean;

  ngAfterContentInit(): void {
    const heading1 = this.el.nativeElement.querySelector('h1');
    const heading2 = this.el.nativeElement.querySelector('h2');

    this.isHeading1 = heading1 !== null;
    this.anchorId = `${heading1?.innerText || heading2?.innerText}`.replace(/ /g, '').toLowerCase();

    // console.log('route.snapshot.fragment', this.route.snapshot.fragment);
    // console.log('anchorId', this.anchorId);
  }

  onClick(): void {
    if (this.isHeading1) return;

    this.router.navigate([], { fragment: this.anchorId, relativeTo: this.route });
  }
}
