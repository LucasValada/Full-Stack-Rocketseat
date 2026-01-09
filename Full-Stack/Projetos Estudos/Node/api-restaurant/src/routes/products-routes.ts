import { Router } from "express";
import { ProductsController } from "../controllers/products-controller";

export const productsRoutes = Router();
export const productsController = new ProductsController();

productsRoutes.post("/", productsController.create);
productsRoutes.get("/", productsController.index);
productsRoutes.put("/:id", productsController.update);
productsRoutes.delete("/:id", productsController.remove);
