import http from "node:http";

const server = http.createServer((req, res) => {
  return res.end("Resposta do meu primeiro servidor");
});

server.listen(3333);
