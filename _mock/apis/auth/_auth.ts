import { HttpResponse, HttpHeaders } from '@angular/common/http';
import { MockRequest, MockStatusError } from '@core/mock';

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
