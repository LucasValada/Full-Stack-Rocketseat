const PORT = 3333;
import { createServer } from "http";
const server = createServer((req, res) => {
  res.end("Hello World");
});
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
