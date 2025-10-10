import { zip } from 'rxjs';

import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

import { NoteOutlineComponent } from '../../outline/outline.component';
import { NoteTitleComponent } from '../../title/title.component';
import { JpCategoryModel, JpTextModel } from '../service/jp.model';
import { JpService } from '../service/jp.service';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [
    CommonModule,

    NoteOutlineComponent,
    NoteTitleComponent,

    MatButtonModule,
    MatIcon,
  ],
  providers: [JpService],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookComponent implements OnInit {
  private jpService = inject(JpService);

  books = signal<Book[]>([]);

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    zip(
      this.loadCategories(),
      this.loadTexts()
    ).subscribe(([categories, texts]) => {
      this.mappingData(categories, texts);
    });
  }

  loadCategories() {
    return this.jpService.getCategories();
  }

  loadTexts() {
    return this.jpService.getTexts();

  }

  mappingData(categories: JpCategoryModel[], texts: JpTextModel[]) {
    this.books.set(categories.map((catDoc: JpCategoryModel): Book => {
      return {
        name: catDoc.name,
        texts: texts
          .filter((textDoc: JpTextModel) => textDoc.categoryId === catDoc.id)
          .map((textDoc: JpTextModel) => textDoc as { text: string; translate: string })
      };
    }));
    console.log('Books:', this.books());
  }

  speak(text: string) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ja-JP'; // 設定語言為日文
    speechSynthesis.speak(utterance);
  }
}

interface Book {
  name: string;
  texts: { text: string; translate: string }[];
}
