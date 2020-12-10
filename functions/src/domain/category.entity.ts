import { ICategory } from "../interfaces/category";
import { IDB } from "../interfaces/db";
import { BaseEntity } from "./base.entity";

export class Category extends BaseEntity<ICategory>{
  constructor(db: IDB<ICategory>) {
    super(db);
  }
}
