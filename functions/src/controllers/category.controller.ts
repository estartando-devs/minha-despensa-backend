import { FirestoreAdapter } from "../adapters/firestore.adapter";
import { Category } from "../domain/category.entity";
import { ICategory } from "../interfaces/category";
import { BaseController } from "./base.controller";

export class CategoryController extends BaseController<ICategory>{
  constructor(dbAdapter = new FirestoreAdapter<ICategory>("categories")){
    const user = new Category(dbAdapter);
    super(user);
  }
}
