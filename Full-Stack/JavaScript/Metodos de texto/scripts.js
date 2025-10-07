let message = "Estou estudando os fundamentos do JavaScript";

console.log(message);

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
