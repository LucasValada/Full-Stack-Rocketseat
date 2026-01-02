import { Request, Response } from "express";
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
    const { name, price } = request.body;
    throw new Error("Erro ao tentar criar um produto");
    // response.send(`Produto '${name}' criado com sucesso. valor: ${price}`);
    response.status(201).json({ name, price, user_id: request.user_id });
  }
}
