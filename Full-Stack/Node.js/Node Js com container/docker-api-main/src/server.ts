import http from "node:http";

const PORT = 3333;
const server = http.createServer(async (request, response) => {
  if (request.method === "GET" && request.url === "/") {
    return response.end("Hello World!");
  }

  return response.writeHead(404).end("Not found!");
});

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
