import { MockRequest, MockStatusError } from '@delon/mock'
import { HttpResponse, HttpHeaders } from '@angular/common/http';

export class AuthMock {

  public static signIn(req: MockRequest) {
    const account = req.body.account;
    const password = req.body.password;
    if (password === '123456') {
      return new HttpResponse({
        body: {
          account: account
        },
        headers: new HttpHeaders({ 'set-access-token': 'token' })
      });
    } else {
      throw new MockStatusError(400);
    }
  }

  public static signOut(req: MockRequest) {
    return {};
  }
}

export const AUTH = {
  'POST ~/api/auth/signIn': (req: MockRequest) => AuthMock.signIn(req),
  'POST ~/api/auth/signOut': (req: MockRequest) => AuthMock.signOut(req),
};
