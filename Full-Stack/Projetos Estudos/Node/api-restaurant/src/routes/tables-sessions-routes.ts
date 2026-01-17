import { Router } from "express";
import { TablesSessionsController } from "@/controllers/tables-sessions-controller";

const tablesSessionsRouter = Router();
const tablesSessionsController = new TablesSessionsController();

tablesSessionsRouter.post("/", tablesSessionsController.create);
tablesSessionsRouter.get("/", tablesSessionsController.index);
tablesSessionsRouter.patch("/:id", tablesSessionsController.update);

export { tablesSessionsRouter };
