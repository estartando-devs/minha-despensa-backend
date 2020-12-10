import { https, Request, Response } from "firebase-functions";
import * as db from "firebase-admin";

import { UserRouters } from "./Routers/user.routers";
import { ProductRouters } from "./Routers/product.routers";
import { CategoryRouters } from "./Routers/category.routers";

db.initializeApp();

const userRouters = new UserRouters();
const productRouters = new ProductRouters();
const categoriesRouters = new CategoryRouters();

export const users = https.onRequest(
  async (request: Request, response: Response): Promise<void> => {
    await userRouters.execute(request, response);
  }
);

export const products = https.onRequest(
  async (request: Request, response: Response): Promise<void> => {
    await productRouters.execute(request, response);
  }
);

export const categories = https.onRequest(
  async (request: Request, response: Response): Promise<void> => {
    await categoriesRouters.execute(request, response);
  }
);
