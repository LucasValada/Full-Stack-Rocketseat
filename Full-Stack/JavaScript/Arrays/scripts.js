// Criando Array com construtor.
const newArray = new Array();
// [] - Array
// {} - Objeto
// () - Funcao
console.log(newArray);

// Retorna o tamanho do array
console.log(newArray.length);

const available = new Array(10);
console.log(available.length); // mostra 10 posições vazias
console.log(available);

let fruits = ["Banana", "Orange", "Apple", "Watermelon"];
console.log(fruits);

// Acessando o array pelo indice
console.log(fruits[1]);

// Acessando o array pelo indice inexistente
console.log(fruits[7]);

// Acessando de forma dinamica o ultimo item
console.log(fruits[fruits.length - 1]);

// Convertendo uma string para array
let fullName = "Lucas Valadão Bispo";
console.log(fullName);
console.log(fullName.split(" ")); // cria arrayusando o espaco como delimitador
// Cria um array com as letras
console.log(Array.from(fullName));

// Adicionando e removendo um item ao array
let users = [];
console.log(users);

// Adiciona com push um item ao final do array
users.push("Lucas");
users.push("Joao");
users.push("Guilherme");
// Adiciona com push um item ao começo do array
users.unshift("Ana");
// Remover um item do inicio do array
users.shift();
// Remover o ultimo item do array
users.pop();

console.log(users);

// Usando o indice
let newFruits = ["Banana", "Apple", "Lemon", "Watermelon"];
// console.log(newFruits);
// encontra e retorna o indice do elemento no array
let position = newFruits.indexOf("Watermelon");
console.log(position);
// quando nao encontra, ele retorna -1
// deletar a partir de um indice ou indices especificos do array
newFruits.splice(1, 3); //start x quantidade
newFruits.splice(position, 1); // remover um item pela posiçao do indice
console.log(newFruits);
