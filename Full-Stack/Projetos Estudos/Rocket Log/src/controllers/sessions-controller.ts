import { Request, Response } from "express";
export class SessionsController {
  create(request: Request, response: Response) {
    return response.status(201).json({ message: "Session created" });
  }
}
