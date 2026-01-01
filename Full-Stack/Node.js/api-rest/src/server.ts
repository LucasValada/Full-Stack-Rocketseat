import express from "express";
const PORT = 3333;
const app = express();

app.get("/products", (request, response) => {
  // /products?page=1&limit=10
  const { page, limit } = request.query;
  response.send(`pagina ${page} de ${limit}`);
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
