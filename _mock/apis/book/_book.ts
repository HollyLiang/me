import { MockRequest } from '@hy/core/mock';
import { MS } from '_mock/service';
export class BookMock {
  public static getBookList(req: MockRequest) {
    return MS.Book.getBookList();
  }

  public static addBook(req: MockRequest) {
    return MS.Book.addBook(req.body);
  }
}
