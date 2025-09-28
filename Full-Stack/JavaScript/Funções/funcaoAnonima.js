// Função anonima (função que não possui nome).
// Função para usar imediatamente.

const showMessage1 = function () {
  return "Olá, Lucas!";
};

console.log(showMessage1);

const showMessage2 = function (name) {
  return "Olá, " + name;
};
console.log(showMessage2("Lucas"));

const showMessage3 = function (message, name) {
  return message + name;
};
console.log(showMessage3("Olá! ", "Lucas"));
