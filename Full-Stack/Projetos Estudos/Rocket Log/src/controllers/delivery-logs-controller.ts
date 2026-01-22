import { Request, Response } from "express";

export class DeliveryLogsController {
  async create(request: Request, response: Response) {
    return response.json({ message: "Create delivery log" });
  }
}
