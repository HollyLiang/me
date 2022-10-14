import { TB_Book } from '../data/_tb_book';

export class MS_Book {
  public static getBookList() {
    return TB_Book.Data;
  }
}
