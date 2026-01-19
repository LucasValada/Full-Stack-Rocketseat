import { Request, Response } from "express";
class UsersController {
  create(request: Request, response: Response) {
    return response.send("Usuário criado com sucesso!");
  }
}

export { UsersController };
