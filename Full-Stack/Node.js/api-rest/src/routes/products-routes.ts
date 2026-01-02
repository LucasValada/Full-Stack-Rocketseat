import { Router } from "express";
import { myMiddleware } from "../middlewares/my-middleware";
import { ProductsController } from "../controllers/ProductsController";

export const productsRoutes = Router();
const productsController = new ProductsController();
productsRoutes.get("/", productsController.index);
productsRoutes.post("/", myMiddleware, productsController.create);
