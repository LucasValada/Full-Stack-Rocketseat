/* 
    Objeto
        - Uma coleção de dados ou funcionalidades
        - Podem ter propriedades e métodos.
*/

// Criando um objeto vazio
const obj = {};
console.log(obj);

// Cria um objeto com propriedades e métodos.
const user = {
  // chave e valor
  email: "lucas@email.com",
  // : serve para atribuir o valor dentro de um objeto e nao o =, nao precisa estar dentro de aspas a chave
  age: 23,
  name: {
    // estrutura de propriedades aninhadas, um objeto dentro de outro.
    firstName: "Lucas",
    surname: "Valadão",
  },
  address: {
    location: "Rua X",
    number: 123,
    city: "Sao Paulo",
    postal_code: "12345-000",
  },
  message: function () {
    console.log(`Olá, é bom ter você ${user.name.firstName}!`);
    console.log(`Olá ${this.name.surname}!`);
  },
};

// Acessando propriedades e métodos usando a notação de ponto.
console.log(user.email);
console.log(user.name.firstName);
// Acessando priopriedades aninhadas de objetos
console.log(user.name.surname);

user.message();

// notação de colchetes
console.log(user["email"]);
user["message"]();

// Atualizando um objeto
const product = {
  name: "teclado",
  quantity: 100,
};
console.log(product.quantity);
product.quantity = 90;
console.log(product.quantity);
product.name = "mouse";
console.log(product.name);
// notação de colchetes
product["quantity"] = 2;
console.log(product["quantity"]);

// encadeamento opcional
/*
    OPTIONAL CHAINING (?.) - encadeamento opcional 
    Se a propriedade ou função chamada é nullish (null ou undefined),
    a expressão retorna undefined em vez de gerar um erro.

    Útil ao explorar o conteúdo de um objeto quando não existe garantia
    de existência de determinadas propriedades obrigatórias.

*/

const person = {
  id: 1,
  name: "Lucas",
  //   address: {
  //     street: "Rua X",
  //     number: 123,
  //     city: "Sao Paulo",
  //     geo: {
  //       latitude: 40120.123,
  //       longitude: 123123.123,
  //     },
  //     postal_code: "12345-000",
  //   },
  message: function () {
    console.log(`${this.name} mora na ${this?.addres?.street}`);
  },
};

person.message?.();

// Operador de coalescência nula
/* 
    Operador Lógico de Coalesceção Nula
    ?? - Se a esquerda for null ou undefined, retorna o valor da direita.
    Útil ao explorar o conteúdo de um objeto quando nao existe garantia de existencia de determinadas propriedades obrigatórias.
*/

let content = null;
console.log(content ?? "Conteudo nao encontrado");
content = "Lucas";
console.log(content ?? "Conteudo nao encontrado");

const image = {
  name: "julia",
  picture: undefined,
};

console.log(image.picture ?? "Imagem nao encontrada");
