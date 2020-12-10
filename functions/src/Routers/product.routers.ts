import { BaseFirebaseFunctionRouter } from "./baseFirebaseFunction.router";
import { ProductController } from "../controllers/product.controller";
import { IProduct } from "../interfaces/product";

export class ProductRouters extends BaseFirebaseFunctionRouter<IProduct> {
  constructor(productController = new ProductController()) {
    super(productController);
  }
}
