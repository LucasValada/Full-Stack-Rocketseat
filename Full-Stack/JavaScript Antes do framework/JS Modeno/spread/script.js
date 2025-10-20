// spread (espalhar) permite que um objeto iterável, como uma expressão de array ou uma string seja expandido para ser usado onde zero ou mais argumentos.

const numbers = [1, 2, 3];
console.log(numbers);

// Spread
console.log(...numbers);
// Criando um objeto
const data = [
  {
    name: "Lucas",
    age: 23,
    avatar: "l.png",
  },
  {
    name: "Valadao",
    email: "valadao@email.com",
    avatar: "v.png",
  },
];
console.log(data);

//Spread no array com objetos.
console.log(...data);
