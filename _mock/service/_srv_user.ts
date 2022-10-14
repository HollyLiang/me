import { TB_UserPwd } from '../data/_tb_user_pwd';
import { TB_User } from '../data/_tb_user';
export class MS_User {
  public static getUserById(id: string) {
    return TB_User.Data.find(i => i.id === id);
  }

  public static getUserByAccount(acc: string) {
    return TB_User.Data.find(i => i.account === acc);
  }

  public static checkUserPassword(acc: string, pwd: string) {
    const user = this.getUserByAccount(acc);
    if (!user) return false;

    const index = TB_UserPwd.Data.findIndex(p => p.userId === user.id && p.pwd === pwd);
    return index !== -1;
  }
}
