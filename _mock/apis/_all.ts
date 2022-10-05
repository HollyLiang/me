import { MockRequest } from '@hy/core/mock';
import { AuthMock } from './auth/_auth';

const Mock = {
  Auth: AuthMock
};

export const AUTH = {
  'POST ~/api/auth/signIn': (req: MockRequest) => Mock.Auth.signIn(req),
  'POST ~/api/auth/signOut': (req: MockRequest) => Mock.Auth.signOut(req),
};
