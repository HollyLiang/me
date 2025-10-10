import { CommonModule, NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { signal } from '@angular/core';
import { Firestore, addDoc, collection, deleteDoc, doc, getDocs, query, updateDoc, where } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { JpService } from '../service/jp.service';

@Component({
  selector: 'app-jp-manage',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatIconModule, MatInputModule, MatButtonModule, NgFor],
  providers: [JpService],
  templateUrl: './manage.component.html',
  styleUrl: './manage.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JpManageComponent implements OnInit {
  private fb = inject(FormBuilder);
  private firestore = inject(Firestore);
  private jpService = inject(JpService);

  categoryForm: FormGroup = this.fb.group({
    categoryName: ['', [Validators.required]],
  });

  textForm: FormGroup = this.fb.group({
    categoryId: ['', [Validators.required]],
    text: ['', [Validators.required]],
    translate: [''],
  });

  categories = signal<any[]>([]); // 將 categories 改為 signal
  texts = signal<any[]>([]); // 將 texts 改為 signal

  selectedCategoryId: string | null = null;
  editingCategoryId: string | null = null;
  editingCategoryName: string = '';

  editingTextId: string | null = null;
  editingText: string = '';
  editingTranslate: string = '';

  ngOnInit(): void {
    this.loadCategories();
    this.loadTexts();
  }

  async loadCategories() {
    this.jpService.getCategories().then(categories => {
      console.log('Categories loaded:', categories);
      this.categories.set(categories); // 使用 signal 的 set 方法
    });
  }

  async loadTexts() {
    if (!this.selectedCategoryId) {
      this.texts.set([]); // 清空 texts
      return;
    }
    this.jpService.getTextsByCategoryId(this.selectedCategoryId).then(texts => {
      this.texts.set(texts);
    });
  }

  selectCategory(categoryId: string) {
    this.selectedCategoryId = categoryId;
    this.jpService.getTextsByCategoryId(categoryId).then(texts => {
      this.texts.set(texts);
    });
    this.textForm.patchValue({ categoryId });
  }

  async addCategory() {
    if (this.categoryForm.valid) {
      this.jpService.addCategory(this.categoryForm.value.categoryName).then(() => {
        this.categoryForm.reset();
        this.loadCategories(); // 更新 categories
      });
    }
  }

  async editCategory(categoryId: string, name: string) {
    this.jpService.updateCategory(categoryId, { name });
    this.loadCategories(); // 更新 categories
  }

  async deleteCategory(categoryId: string) {
    this.jpService.deleteCategory(categoryId);
    this.loadCategories(); // 更新 categories
  }

  async addText() {
    if (this.textForm.valid) {
      this.jpService.addText(this.textForm.value.categoryId, {
        text: this.textForm.value.text,
        translate: this.textForm.value.translate,
      }).then(() => {
        this.textForm.reset();
        this.loadTexts(); // 更新 texts
      });
    }
  }

  async editText(textId: string, text: string, translate: string) {
    this.jpService.updateText(textId, { text, translate });
    this.loadTexts(); // 更新 texts
  }

  async deleteText(textId: string) {
    this.jpService.deleteText(textId);
    this.loadTexts(); // 更新 texts
  }

  startEditingCategory(categoryId: string, categoryName: string) {
    this.editingCategoryId = categoryId;
    this.editingCategoryName = categoryName;
  }

  async saveCategoryEdit(categoryId: string) {
    if (this.editingCategoryName.trim()) {
      await this.jpService.updateCategory(categoryId, { name: this.editingCategoryName });
      this.loadCategories(); // 更新 categories
      this.cancelCategoryEdit();
    }
  }

  cancelCategoryEdit() {
    this.editingCategoryId = null;
    this.editingCategoryName = '';
  }

  startEditingText(textId: string, text: string, translate: string) {
    this.editingTextId = textId;
    this.editingText = text;
    this.editingTranslate = translate;
  }

  async saveTextEdit(textId: string) {
    if (this.editingText.trim() || this.editingTranslate.trim()) {
      console.log('Saving text edit:', textId, this.editingText, this.editingTranslate);
      await this.jpService.updateText(textId, { text: this.editingText, translate: this.editingTranslate });
      this.loadTexts(); // 更新 texts
      this.cancelTextEdit();
    }
  }

  cancelTextEdit() {
    this.editingTextId = null;
    this.editingText = '';
    this.editingTranslate = '';
  }
}
