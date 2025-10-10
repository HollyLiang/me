import { Injectable, inject } from '@angular/core';
import { CollectionReference, DocumentReference, Firestore, collection, deleteDoc, doc, getDocs, setDoc, updateDoc } from '@angular/fire/firestore';

import { JpCategoryModel, JpTextModel } from './jp.model';

@Injectable()
export class JpService {
  private firestore = inject(Firestore);

  /** 取得日文分類 */
  getCategories(): Promise<JpCategoryModel[]> {
    const ref = collection(this.firestore, 'jpCategory') as CollectionReference<JpCategoryModel>;
    return getDocs(ref).then(snapshot => snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
  }

  /** 新增日文分類 */
  addCategory(name: string): Promise<DocumentReference<JpCategoryModel>> {
    const ref = collection(this.firestore, 'jpCategory') as CollectionReference<JpCategoryModel>;
    const docRef = doc(ref);
    const data: JpCategoryModel = { id: docRef.id, name };
    return setDoc(docRef, data).then(() => docRef);
  }

  /** 更新日文分類 */
  updateCategory(id: string, data: Partial<JpCategoryModel>): Promise<void> {
    const ref = doc(this.firestore, `jpCategory/${id}`) as DocumentReference<JpCategoryModel>;
    return updateDoc(ref, data);
  }

  /** 刪除日文分類 */
  deleteCategory(id: string): Promise<void> {
    const ref = doc(this.firestore, `jpCategory/${id}`) as DocumentReference<JpCategoryModel>;
    return deleteDoc(ref);
  }

  /** 取得日文文本 */
  getTexts(): Promise<JpTextModel[]> {
    const ref = collection(this.firestore, 'jpText') as CollectionReference<JpTextModel>;
    return getDocs(ref).then(snapshot => snapshot.docs.map(doc => doc.data()));
  }

  /** 根據分類 ID 取得日文文本 */
  getTextsByCategoryId(categoryId: string): Promise<JpTextModel[]> {
    const ref = collection(this.firestore, 'jpText') as CollectionReference<JpTextModel>;
    return getDocs(ref).then(snapshot => snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })).filter(text => text.categoryId === categoryId));
  }

  /** 新增日文文本 */
  addText(categoryId: string, { text, translate }: { text: string; translate: string }): Promise<DocumentReference<JpTextModel>> {
    const ref = collection(this.firestore, 'jpText') as CollectionReference<JpTextModel>;
    const docRef = doc(ref);
    const newData: JpTextModel = { id: docRef.id, categoryId, text, translate };
    return setDoc(docRef, newData).then(() => docRef);
  }

  /** 更新日文文本 */
  updateText(id: string, { text, translate }: { text: string; translate: string }): Promise<void> {
    const ref = doc(this.firestore, `jpText/${id}`) as DocumentReference<JpTextModel>;
    return updateDoc(ref, { text, translate });
  }

  /** 刪除日文文本 */
  deleteText(id: string): Promise<void> {
    const ref = doc(this.firestore, `jpText/${id}`) as DocumentReference<JpTextModel>;
    return deleteDoc(ref);
  }
}
