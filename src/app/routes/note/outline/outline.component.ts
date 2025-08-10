import { min } from 'lodash';
import { Subject, Subscription, debounceTime } from 'rxjs';

import { CommonModule, NgFor } from '@angular/common';
import { AfterContentInit, Component, ElementRef, HostListener, OnDestroy, inject } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-note-outline',
  standalone: true,
  imports: [CommonModule, MatListModule, MatSidenavModule, NgFor],
  templateUrl: './outline.component.html',
  styleUrl: './outline.component.scss'
})
export class NoteOutlineComponent implements AfterContentInit, OnDestroy {
  @HostListener('scroll', ['$event'])
  onHostScroll(event: Event) {
    if (event.target === this.el.nativeElement) {
      this.scrollSubject.next(event);
    }
  }

  private el: ElementRef = inject(ElementRef);
  private route = inject(ActivatedRoute);

  private scrollSubject = new Subject<Event>();
  private scrollSubscription: Subscription;

  outline: Array<OutlineItem> = [];

  ngAfterContentInit(): void {
    this.setIdAndText();
    this.listenScroll();

    setTimeout(() => {
      this.setItemTop();
      this.scrollToFragment();
    }, 1000);
  }


  ngOnDestroy(): void {
    this.scrollSubscription?.unsubscribe();
  }

  setIdAndText(): void {
    const headings: NodeList = this.el.nativeElement.querySelectorAll('h2');
    headings.forEach((node) => {
      this.outline.push({
        text: node.textContent || '',
        top: 0,
        isActive: false
      });
    });

    if (this.outline.length > 0) this.outline[0].isActive = true;
  }

  listenScroll(): void {
    this.scrollSubscription = this.scrollSubject.pipe(
      debounceTime(50) // 200ms 防抖
    ).subscribe(event => {
      const scrollTop = (event.target as HTMLElement).scrollTop;
      this.setActiveItem(scrollTop);
    });
  }

  setItemTop(): void {
    const nodeList = this.el.nativeElement.querySelectorAll('h2')
    this.outline.forEach((item, index) => {
      const node = nodeList[index];
      if (node) {
        item.top = node['offsetTop'] || 0;
      }
    });
  }

  scrollToFragment(): void {
    const fragmentId = this.route.snapshot.fragment;
    const fragment = this.el.nativeElement.querySelector(`#${fragmentId}`);
    if (fragment) {
      fragment.scrollIntoView();
    }
  }

  clearActiveItems(): void {
    this.outline.forEach(item => item.isActive = false);
  }

  setActiveItem(scrollTop: number): void {
    this.clearActiveItems();

    let activeIndex = 0;
    for (let i = 0; i < this.outline.length; i++) {
      if (scrollTop >= this.outline[i].top - window.innerHeight / 2) {
        activeIndex = i;
      } else {
        break;
      }
    }

    if (this.outline[activeIndex]) {
      this.outline[activeIndex].isActive = true;
    }
  }

  onItemClick(item: OutlineItem): void {
    if (item.isActive) return;

    this.clearActiveItems();
    item.isActive = true;

    this.el.nativeElement.scrollTo({
      top: item.top - 20,
      behavior: 'smooth'
    });
  }
}

interface OutlineItem {
  text: string;
  top: number;
  isActive: boolean;
}
