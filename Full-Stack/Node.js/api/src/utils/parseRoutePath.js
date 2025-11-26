export function parseRoutePath(path) {
  const routeParametersRegex = /:([a-zA-Z]+)/g;

  const params = path.replaceAll(routeParametersRegex, "(?<$1>[a-z0-9-_]+)");
  const pathRegex = new RegExp(`${params}(?<query>\\?(.*))?$`);

  return pathRegex;
}

//   /products/:category/:id/: padrão não nomeado
//   /products/?page=1&category=2/ padrão nomeado
