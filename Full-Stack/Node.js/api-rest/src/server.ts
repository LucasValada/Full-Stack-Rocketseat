import express from "express";
import { myMiddleware } from "./middlewares/my-middleware";
const PORT = 3333;
const app = express();
app.use(express.json());
// middleware global aplica em todas as rotas abaixo.
// app.use(myMiddleware);

app.get("/products", (request, response) => {
  // /products?page=1&limit=10
  const { page, limit } = request.query;
  response.send(`pagina ${page} de ${limit}`);
});

// middleware local aplica em uma rota específica.
app.post("/products", myMiddleware, (request, response) => {
  const { name, price } = request.body;
  // response.send(`Produto '${name}' criado com sucesso. valor: ${price}`);
  response.status(201).json({ name, price });
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
