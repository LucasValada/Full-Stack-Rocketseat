import { Request, Response } from "express";
import { AppError } from "@/utils/AppError";
import { sign } from "jsonwebtoken";
import { authConfig } from "@/configs/auth";
class SessionsController {
  async create(request: Request, response: Response) {
    const { username, password } = request.body;
    const fakeUser = {
      id: "1",
      username: "Lucas Valadao",
      password: "123456",
      role: "customer",
    };

    if (username !== fakeUser.username || password !== fakeUser.password) {
      throw new AppError("Username or password incorrect!", 401);
    }

    const { secret, expiresIn } = authConfig.jwt;
    const token = sign({ role: fakeUser.role }, secret, {
      subject: String(fakeUser.id),
      expiresIn,
    });

    return response.json({ token });
  }
}

export { SessionsController };
