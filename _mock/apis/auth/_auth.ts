import { HttpResponse, HttpHeaders } from '@angular/common/http';
import { MockRequest, MockStatusError } from '@core/mock';
import { MS } from '_mock/service';

export class AuthMock {

  public static signIn(req: MockRequest) {
    const account = req.body.account;
    const password = req.body.password;
    const user = MS.User.checkUserPassword(account, password);
    if (user) {
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
