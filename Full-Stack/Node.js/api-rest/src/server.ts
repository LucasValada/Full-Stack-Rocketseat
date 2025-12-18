import express from "express";
const PORT = 3333;
const app = express();

app.get("/products/:id/:user", (request, response) => {
  const { id, user } = request.params;
  response.send(`Produto ${id} encontrado para o usuário ${user}`);
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
