import { FirestoreAdapter } from "../adapters/firestore.adapter";
import { Product } from "../domain/product.entity";
import { IProduct } from "../interfaces/product";
import { BaseController } from "./base.controller";

export class ProductController extends BaseController<IProduct>{
  constructor(dbAdapter = new FirestoreAdapter<IProduct>("products")){
    const user = new Product(dbAdapter);
    super(user);
  }
}
