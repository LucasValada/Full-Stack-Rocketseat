console.log("### METODOS DE ARRAY || FIND ###");
// Retorna o valor do primeiro elemento do array que satisfizer a condição.
const valuesFind = [4, 6, 7, 12];
// Retorna o primeiro elemento com o valor que o valor seja maior que 10
const found = valuesFind.find((value) => value > 10);
console.log(found);

// Exemplo com objetos
const fruitsFind = [
  { name: "apples", quantity: 23 },
  { name: "oranges", quantity: 12 },
  { name: "pears", quantity: 10 },
];
const resultFind = fruitsFind.find((fruitfind) => fruitfind.name === "oranges");
console.log(resultFind);
