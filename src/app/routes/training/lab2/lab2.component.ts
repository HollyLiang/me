import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { MatIcon } from '@angular/material/icon';
import { MatTable, MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatCellDef, MatCell, MatHeaderRowDef, MatHeaderRow, MatRowDef, MatRow } from '@angular/material/table';
import { NgIf, DatePipe } from '@angular/common';

@Component({
    selector: 'app-training-lab2',
    templateUrl: './lab2.component.html',
    styleUrls: ['./lab2.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [MatButton, RouterLink, MatIcon, MatTable, MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatCellDef, MatCell, NgIf, MatHeaderRowDef, MatHeaderRow, MatRowDef, MatRow, DatePipe]
})
export class Lab2Component implements OnInit {
  displayedColumns: Array<string> = ['no', 'name', 'author', 'press', 'publishDate', 'price', 'discount'];
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

  calcDisCount(price: number, discount: number) {
    return Math.round(price * discount);
  }

  calcSpecialPrice(price: number, discount: number) {
    return Math.round(price * discount);
  }

}

interface BookModel {
  no: string;
  name: string;
  author: string;
  publishDate: Date;
}
