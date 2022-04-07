export class MD_User {
  private static _info: Array<MD_UserModel>;
  private static _pwd: Array<MD_UserPwdModel>;


  public static get Info() {
    return this._info || this.initInfo();
  }
  private static initInfo() {
    this._info = [];
    this._info.push({ id: '1', account: 'holly', name: 'Holly' });
    return this._info;
  }


  public static get Pwd() {
    return this._pwd || this.initPwd();
  }
  private static initPwd() {
    this._pwd = [];
    this.Info.forEach(i => {
      this._pwd.push({ userId: i.id, pwd: '123456' });
    });
    return this._pwd;
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
