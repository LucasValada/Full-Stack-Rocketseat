import { Request, Response, NextFunction } from "express";
import { prisma } from "@/prisma";
class UsersController {
  async index(request: Request, response: Response) {
    const users = await prisma.user.findMany();

    return response.json(users);
  }

  async create(request: Request, response: Response, next: NextFunction) {
    const { name, email } = request.body;

    await prisma.user.create({ data: { name, email } });

    return response.status(201).json();
  }

  async show(request: Request, response: Response) {
    const { id } = request.params;

    const user = await prisma.user.findUnique({
      where: { id: request.params.id },
    });

    return response.json(user);
  }
}

export { UsersController };
