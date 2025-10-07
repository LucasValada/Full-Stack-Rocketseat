let message = "Estou estudando os fundamentos do JavaScript";

/* console.log(message);
// Exibir o testo em maiúsculo
console.log(message.toUpperCase());
// Exibir o texto em minúsculo
console.log(message.toLowerCase());
// Exibir o tamanho do texto
console.log(message.length);
let password = "12345";
if (password.length < 6) {
  console.log("A senha deve ter pelo menos 6 caracteres");
}
// Quantos digitos tem um número
let value = 12345;
console.log(value.toString().length);
console.log(String(value + "teste 2").length);

// Substituindo e fatiando um texto
console.log(message.replace("JavaScript", "Full-Stack"));


*/

// fatiando o texto
console.log(message.slice(0, 5));
console.log(message.slice(6, 30));
// fatiando o texto de tras para frente
console.log(message.slice(-11));
// Remover espaçoes em branco
let removeSpace = "   Lucas Valadao   ";
console.log(removeSpace.length);
console.log(removeSpace.trim().length);
// .trim remove os espaços em branco da esquerda e da direita

// fatiando o texto e concatenando
console.log(message.slice(0, 5).concat(" Estudando Full-Stack"));
