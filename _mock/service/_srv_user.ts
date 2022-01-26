import { MD_User } from './../data/_data_user';
export class MS_User {
  public static getUserById(id: string) {
    return MD_User.Info.find(i => i.id === id);
  }

  public static checkUserPassword(acc: string, pwd: string) {
    return MD_User.Info.find(i => {
      if (i.account !== acc) return false;
      const index = MD_User.Pwd.findIndex(p => p.userId === i.id && p.pwd === acc);
      return index !== -1;
    });
  }
}
