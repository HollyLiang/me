import { MockTable } from "./mock-table";
import { TB_User } from "./_tb_user";

export class TB_UserPwd {
  static table = new MockTable<TB_UserPwdModel>(() => {
    return TB_User.Data.map(i => {
      return { userId: i.id, pwd: '123456' };
    });
  });

  static get Data(): Array<TB_UserPwdModel> {
    return this.table.Data;
  }
}


interface TB_UserPwdModel {
  userId: string;
  pwd: string;
}

