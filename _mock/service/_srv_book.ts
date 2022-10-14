import { TB_Book, TB_BookModel } from '../data/_tb_book';

export class MS_Book {
  public static getBookList() {
    return TB_Book.Data;
  }

  public static addBook(model: TB_BookModel) {
    model.no = TB_Book.Data.map(d => d.no).sort().pop() + 1;
    TB_Book.Data.push(model);
    return;
  }
}
