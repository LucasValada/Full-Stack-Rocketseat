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
  message: () => {
    console.log(`Olá, é bom ter você ${user.name.firstName}!`);
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

