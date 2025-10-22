// destructuring assignment permite extrair dados de arrays ou objetos em variáveis distintas.
// No caso de arrays, a desestruturação é feita com colchetes [].

const data = ["Lucas", "lucas@Email.com"];
// Desestruturando o array data
const [username, email] = data;
console.log(username); // Lucas
console.log(email); // lucas@Email.com

const fruits = ["Banana", "Uva", "Morango"];
const [first, second, third] = fruits;
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
// Ignorando o primeiro valor
const [_, Uva] = fruits;
console.log(Uva); // Uva

// Agora com objetos
const products = {
  description: "Teclado",
  price: 150,
};
const { description, price } = products;
console.log(description);
console.log(price);

function newProduct({ description, price }) {
  console.log("### New Product ###");
  console.log("Descricao:", description);
  console.log("R$", price);
}
newProduct({
  description: "Mouse",
  price: 80,
});
