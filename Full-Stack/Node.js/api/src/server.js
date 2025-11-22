import http from "node:http";
import { jsonBodyHandler } from "./middlewares/jsonBodyHandler.js";
const server = http.createServer(async (request, response) => {
  const { method, url } = request;

  await jsonBodyHandler(request, response);

  if (method === "GET" && url === "/products") {
    return response.end("Listagem de produtos");
  }
  if (method === "POST" && url === "/products") {
    return response.writeHead(201).end(JSON.stringify(request.body));
  }

  // Define o header de resposta como JSON.
  return response.writeHead(404).end("Rota nao encontrada");
  // return res.end("Método HTTP: " + method);
});

server.listen(3333);
