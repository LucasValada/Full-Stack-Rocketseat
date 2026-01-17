import { Router } from "express";
import { productsRoutes } from "./products-routes";

export const routes = Router();
routes.use("/products", productsRoutes);
