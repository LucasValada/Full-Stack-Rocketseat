/* 
    - Parâmetros: é a  variável (escopo da função) que irá receber um valor em uma função.
    - Argumentos: é o valor que vai ser passado para o parâmetro(função).
*/

// let username = "Valadão";

// Passando o parâmetro username.
function message(username) {
  console.log("Olá", username);
}

// Passando argumentos.
message("Lucas");
message("Ana");

// console.log(username);

function sum(a, b) {
  // a ordem importa das variaveis
  console.log(a + b);
}

sum(10, 20);
sum(30, 40);

// Definindo um valor (argumento) padrao.
function joinText(text1, text2 = "", text3 = "") {
  console.log(text1, text2, text3);
}

joinText("Ola", "Lucas", "Valadao");
joinText("Lucas", "Valadao", "Ola");
joinText("Lucas", "Valadao");
