import http from "node:http";

const server = http.createServer(async (req, res) => {
  const { method, url } = req;

  if (method === "GET" && url === "/products") {
    return res.end("Listagem de produtos");
  }
  if (method === "POST" && url === "/products") {
    const buffers = [];
    for await (const chunk of req) {
      buffers.push(chunk);
    }
    console.log(Buffer.concat(buffers).toString());

    return res.writeHead(201).end("Produto cadastrado com sucesso");
  }
  return res.writeHead(404).end("Rota nao encontrada");
  // return res.end("Método HTTP: " + method);
});

server.listen(3333);
