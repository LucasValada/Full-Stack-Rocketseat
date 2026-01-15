import { Request, Response } from "express";

class ProductsController {
  async index(request: Request, response: Response) {
    return response.json({ message: "List of products" });
  }

  async create(request: Request, response: Response) {
    return response.status(201).json({ message: "Product created" });
  }
}

export { ProductsController };
