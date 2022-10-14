import { MockTable } from "./mock-table";

export class TB_User {
  static table = new MockTable<TB_UserModel>(() => {
    return [
      { id: '1', account: 'holly', name: 'Holly', imgUrl: 'aseets/avatar/holly.jpeg' }
    ];
  });

  static get Data(): Array<TB_UserModel> {
    return this.table.Data;
  }
}

export interface TB_UserModel {
  id: string;
  account: string;
  name: string;
  imgUrl: string;
}
