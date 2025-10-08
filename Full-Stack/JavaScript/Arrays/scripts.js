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
