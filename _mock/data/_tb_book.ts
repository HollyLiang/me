import { MockTable } from "./mock-table";
export class TB_Book {
  static table = new MockTable<TB_BookModel>(() => {
    return [{
      no: '10001',
      name: '6區塊黃金比例時間分配法',
      author: '정지하',
      press: '方言文化',
      publishDate: new Date('2022/10/05'),
      price: 630,
      discount: 0.75
    }, {
      no: '10002',
      name: '隱形冠軍2.0：中堅企業面對地緣政治的務實佈局，擁抱生態系與永續成長的新策略',
      author: 'Hermann Simon, Benjamin Doering',
      press: '天下雜誌',
      publishDate: new Date('2022/10/05'),
      price: 550,
      discount: 0.79
    }, {
      no: '10003',
      name: '人類的旅程：財富和不平等的起源',
      author: 'Oded Galor',
      press: '商業周刊',
      publishDate: new Date('2022/10/05'),
      price: 450,
      discount: 1
    }];
  });

  static get Data(): Array<TB_BookModel> {
    return this.table.Data;
  }
}


export interface TB_BookModel {
  no: string;
  /** 書名 */
  name: string;
  /** 作者 */
  author: string;
  /** 出版社 */
  press: string;
  /** 出版日期 */
  publishDate: Date;

  /** 定價 */
  price: number;
  /** 折扣 */
  discount: number;
}
