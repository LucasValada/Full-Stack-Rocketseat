let text = "Estudar, Aprender, Praticar";
let separate = text.split(", ");

console.log(separate);

let message = "Estou estudando os fundamentos do JavaScript";
console.log(message.split(" "));

let joined = separate.join(" - ");
console.log(joined);

// obter a posição da palavra
console.log(message.indexOf("JavaScript"));

// Verifica se existe a palavra na String.
console.log(message.includes("JavaScript"));
// console.log(message.toLowerCase().includes("JavaScript"));
