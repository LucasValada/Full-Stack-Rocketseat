import { Router } from "express";

import { DeliveryLogsController } from "@/controllers/delivery-logs-controller";
import { ensureAuthenticated } from "@/middlewares/ensure-authenticated";
import { verifyUserAuthorization } from "@/middlewares/verifyUserAuthorization";

const deliveryLogsRoutes = Router();
const deliveryLogsController = new DeliveryLogsController();

deliveryLogsRoutes.post(
  "/",
  ensureAuthenticated,
  verifyUserAuthorization(["sale"]), // somente users com papel "sale" podem criar logs de entrega com verifyUserAuthorization
  deliveryLogsController.create,
);

deliveryLogsRoutes.get(
  "/:delivery_id/show",
  ensureAuthenticated,
  verifyUserAuthorization(["sale", "customer"]), // users com papel "sale" ou "customer" podem ver os logs de entrega
  deliveryLogsController.show,
);

export { deliveryLogsRoutes };
