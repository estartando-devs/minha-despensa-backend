import { BaseFirebaseFunctionRouter } from "./baseFirebaseFunction.router";
import { CategoryController } from "../controllers/category.controller";
import { ICategory } from "../interfaces/category";

export class CategoryRouters extends BaseFirebaseFunctionRouter<ICategory> {
  constructor(categoryController = new CategoryController()) {
    super(categoryController);
  }
}
