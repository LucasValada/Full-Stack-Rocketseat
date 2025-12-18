import express from "express";
const PORT = 3333;
const app = express();

app.get("/", (request, response) => {
  response.send("Hello World");
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
