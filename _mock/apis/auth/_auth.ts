import { HttpResponse, HttpHeaders } from '@angular/common/http';
import { MockAuthorize, MockRequest, MockStatusError } from '@hy/core/mock';
import { MS } from '_mock/service';

export class AuthMock {

  public static signIn(req: MockRequest) {
    const account = req.body.account;
    const password = req.body.password;
    const isValid = MS.User.checkUserPassword(account, password);
    if (isValid) {
      const user = MS.User.getUserByAccount(account);
      return new HttpResponse({
        body: {
          id: user.id,
          name: user.name,
          imgUrl: user.imgUrl
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
