import { Router } from "express";
import { TablesController } from "@/controllers/tables-controller";

export const tablesRoutes = Router();
const tablesController = new TablesController();

tablesRoutes.get("/", tablesController.index);
