import { Request, Response } from "express";
import { AppError } from "../utils/AppError";
import { z } from "zod";
export class ProductsController {
  /**
   * index - GET /products para listar todos os produtos
   * show - GET /products/:id para mostrar um produto específico
   * create - POST /products para criar um novo produto
   * update - PUT /products/:id para atualizar um produto específico
   * delete - DELETE /products/:id para deletar um produto específico
   */

  index(request: Request, response: Response) {
    // /products?page=1&limit=10
    const { page, limit } = request.query;

    response.send(`pagina ${page} de ${limit}`);
  }

  create(request: Request, response: Response) {
    const bodySchema = z.object({
      name: z
        .string({ required_error: "name is required" })
        .trim()
        .min(6, { message: "Name must be 6 or more characters" }),
      price: z
        .number({ required_error: "price is required" })
        .positive({ message: "Price must be positive" })
        .gte(10),
    });

    const { name, price } = bodySchema.parse(request.body);

    response.status(201).json({ name, price, user_id: request.user_id });
  }
}
