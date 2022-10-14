import { AuthMock } from './auth/_auth';
import { BookMock } from './book/_book';
import { MockRequest } from '@hy/core/mock';

export const AUTH = {
  'POST ~/api/auth/signIn': (req: MockRequest) => AuthMock.signIn(req),
  'POST ~/api/auth/signOut': (req: MockRequest) => AuthMock.signOut(req),
};

export const BOOK = {
  'GET ~/api/books': (req: MockRequest) => BookMock.getBookList(req),
};
