"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_http_1 = __importDefault(require("node:http"));
const PORT = 3333;
const server = node_http_1.default.createServer(async (request, response) => {
    if (request.method === "GET" && request.url === "/") {
        return response.end("Hello World!");
    }
    return response.writeHead(404).end("Not found!");
});
server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
