import { Router } from "express";
import { ProductsController } from "@/controllers/products-controller";
import { ensureAuthenticated } from "@/middlewares/ensureAuthenticated";
import { verifyUserAuthorization } from "@/middlewares/verifyUserAuthorization";
const productsRoutes = Router();
const productsController = new ProductsController();

productsRoutes.use(verifyUserAuthorization(["admin", "customer"]));
productsRoutes.get("/", productsController.index);
productsRoutes.post("/", ensureAuthenticated, productsController.create);

export { productsRoutes };
