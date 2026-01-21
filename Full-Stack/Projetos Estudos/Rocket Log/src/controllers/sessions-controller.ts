import { Request, Response } from "express";
import { prisma } from "@/database/prisma";
import { z } from "zod";
import { appError } from "@/utils/appError";
import { compare } from "bcrypt";
export class SessionsController {
  async create(request: Request, response: Response) {
    const bodySchema = z.object({
      email: z.string().email(),
      password: z.string().min(6),
    });

    const { email, password } = bodySchema.parse(request.body);

    const user = await prisma.user.findFirst({ where: { email } });

    if (!user) {
      throw new appError("Email or password incorrect", 401);
    }

    const passwordMatched = await compare(password, user.password);
    if (!passwordMatched) {
      throw new appError("Email or password incorrect", 401);
    }
    return response.status(201).json({ message: "Session created", user });
  }
}
