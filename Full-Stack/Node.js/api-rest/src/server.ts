import express, { NextFunction, Request, Response } from "express";

import { routes } from "./routes";
import { AppError } from "./utils/AppError";

const PORT = 3333;
const app = express();
app.use(express.json());
app.use(routes);

/**
 * Middleware para tratar erros
 * Erro do cliente - 400 (Bad Request)
 * Erro do servidor - 500 (Internal Server Error)
 * Erro de validação - 422 (Unprocessable Entity)
 * Erro de autenticação - 401 (Unauthorized)
 * Erro de autorização - 403 (Forbidden)
 * Erro de recurso não encontrado - 404 (Not Found)
 * Erro de método não permitido - 405 (Method Not Allowed)
 * Erro de requisição muito grande - 413 (Payload Too Large)
 * Erro de requisição muito pequena - 411 (Length Required)
 */
app.use((error: any, request: Request, response: Response, _: NextFunction) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({ message: error.message });
  }

  response.status(500).json({ error: error.message });
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
