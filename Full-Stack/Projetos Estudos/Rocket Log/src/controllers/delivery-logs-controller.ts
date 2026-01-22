import { Request, Response } from "express";
import { z } from "zod";
import { prisma } from "@/database/prisma";
import { appError } from "@/utils/appError";

export class DeliveryLogsController {
  async create(request: Request, response: Response) {
    const bodySchema = z.object({
      delivery_id: z.string().uuid(),
      description: z.string(),
    });

    const { delivery_id, description } = bodySchema.parse(request.body);

    const delivery = await prisma.delivery.findUnique({
      where: { id: delivery_id },
    });

    if (!delivery) {
      throw new appError("Delivery not found", 404);
    }

    if (delivery.status === "delivered") {
      throw new appError("this order has already been delivered", 400);
    }

    if (delivery.status === "processing") {
      throw new appError("change the status of the delivery", 400);
    }

    await prisma.deliveryLog.create({
      data: {
        deliveryId: delivery_id,
        description,
        status: delivery.status,
      },
    });
    return response.status(201).json();
  }

  async show(request: Request, response: Response) {
    const paramsSchema = z.object({
      delivery_id: z.string().uuid(),
    });
    const { delivery_id } = paramsSchema.parse(request.params);

    const delivery = await prisma.delivery.findUnique({
      where: { id: delivery_id },
      include: {
        logs: true,
        user: true,
      },
    });

    if (!delivery) {
      throw new appError("Delivery not found", 404);
    }

    if (
      request.user?.role === "customer" &&
      request.user.id !== delivery.userId
    ) {
      throw new appError(
        "the user does not have permission to access others deliveries",
        404,
      );
    }

    const deliveryLogs = await prisma.deliveryLog.findMany({
      where: { deliveryId: delivery_id },
    });

    return response.status(200).json(deliveryLogs);
  }
}
