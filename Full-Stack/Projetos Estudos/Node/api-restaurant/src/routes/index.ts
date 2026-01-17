import { Router } from "express";
import { productsRoutes } from "./products-routes";
import { tablesRoutes } from "./tables-routes";
import { tablesSessionsRouter } from "./tables-sessions-routes";
import { ordersRoutes } from "./orders-routes";

export const routes = Router();
routes.use("/products", productsRoutes);
routes.use("/tables", tablesRoutes);
routes.use("/tables-sessions", tablesSessionsRouter);
routes.use("/orders", ordersRoutes);
