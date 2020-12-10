import { IDB } from "../interfaces/db";
import { IProduct } from "../interfaces/product";
import { BaseEntity } from "./base.entity";

export class Product extends BaseEntity<IProduct>{
  constructor(db: IDB<IProduct>) {
    super(db);
  }
}
