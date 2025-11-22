export const routes = [
  {
    method: "GET",
    path: "/products",
    controller: (request, response) => {
      return response.end("Listagem de produtos");
    },
  },
  {
    method: "POST",
    path: "/products",
    controller: (request, response) => {
      return response.writeHead(201).end(JSON.stringify(request.body));
    },
  },
];
