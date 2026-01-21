import { Request, Response } from "express";
import { hash } from "bcrypt";
import { z } from "zod";
import { prisma } from "@/database/prisma";
import { appError } from "@/utils/appError";

class UsersController {
  async create(request: Request, response: Response) {
    const bodySchema = z.object({
      name: z.string().trim().min(2),
      email: z.string().email(),
      password: z.string().min(6),
    });

    const { name, email, password } = bodySchema.parse(request.body);

    const userWithSameEmail = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (userWithSameEmail) {
      throw new appError("User with same email already exists");
    }

    const hashedPassword = await hash(password, 8);
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    const { password: _, ...userWithoutPassword } = user;

    return response.json(userWithoutPassword);
  }
}

export { UsersController };
