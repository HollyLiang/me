import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-training-lab2',
  templateUrl: './lab2.component.html',
  styleUrls: ['./lab2.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Lab2Component implements OnInit {
  books: Array<BookModel> = [];

  constructor(
    private cdr: ChangeDetectorRef,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.loadBookList();
  }

  loadBookList() {
    this.http.get('~/api/books').subscribe(res => {
      this.books = res as Array<BookModel>;
      this.cdr.detectChanges();
    });
  }

  calcSpecialPrice(price: number, discount: number) {
    console.log('calcSpecialPrice')
    return Math.round(price * discount);
  }
}

interface BookModel {
  no: string;
  name: string;
  author: string;
  publishDate: Date;
}
