export interface JpCategoryModel {
  id: string;
  name: string;
}

export interface JpTextModel {
  id: string;
  categoryId: string;
  text: string;
  translate?: string;
}
