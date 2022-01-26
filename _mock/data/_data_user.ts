import { UserModel } from 'src/app/model/user.model';

export class MD_User {
  private static info: Array<MD_UserModel>;
  private static pwd: Array<MD_UserPwdModel>;


  public static get Info() {
    return this.info || this.initInfo();
  }
  private static initInfo() {
    this.info.push({ id: '1', account: 'holly', 'name': 'Holly' });
    return this.info;
  }


  public static get Pwd() {
    return this.pwd || this.initPwd();
  }
  private static initPwd() {
    this.info.forEach(i => {
      this.pwd.push({ userId: i.id, pwd: '123456' });
    });
    return this.pwd;
  }
}


interface MD_UserPwdModel {
  userId: string;
  pwd: string;
}

interface MD_UserModel {
  id: string;
  account: string;
  name: string;
}
