import { Request, Response, NextFunction } from "express";
import { prisma } from "@/database/prisma";
import { z } from "zod";

export class DeliveriesStatusController {
  async update(request: Request, response: Response, next: NextFunction) {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    });

    const bodySchema = z.object({
      status: z.enum(["processing", "shipped", "delivered"]),
    });
    const { id } = paramsSchema.parse(request.params);
    const { status } = bodySchema.parse(request.body);

    const delivery = await prisma.delivery.update({
      data: {
        status,
      },
      where: { id },
    });

    await prisma.deliveryLog.create({
      data: {
        deliveryId: id,
        description: `Status changed to ${status}`,
        status,
      },
    });

    return response.status(200).json(delivery);
  }
}
