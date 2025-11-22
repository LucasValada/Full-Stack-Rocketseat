export async function jsonBodyHandler(request, response) {
  // ARRAY PARA ARMAZENAR OS CHUNKS DE DADOS
  const buffers = [];

  // cOLETA OS CHUNKS DE DADOS NA REQUISIÇÃO
  for await (const chunk of request) {
    buffers.push(chunk);
  }

  try {
    // concatena os chunks e converte para string. Em seguida converte para JSON
    request.body = JSON.parse(Buffer.concat(buffers).toString());
  } catch (e) {
    request.body = null;
  }

  response.setHeader("Content-Type", "application/json");
}
