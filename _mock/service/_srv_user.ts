import { MD_User } from './../data/_data_user';
export class MS_User {
  public static getUserById(id: string) {
    return MD_User.Info.find(i => i.id === id);
  }

  public static checkUserPassword(acc: string, pwd: string) {
    const user = MD_User.Info.find(i => i.account === acc);
    if (!user) return false;

    const index = MD_User.Pwd.findIndex(p => p.userId === user.id && p.pwd === pwd);
    return index !== -1;
  }
}
