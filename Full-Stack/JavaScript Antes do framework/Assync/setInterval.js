console.log("### setInterval ###");
// setInterval() - executa uma funcao a cada certo intervalo de tempo.
let value = 10;
const interval = setInterval(() => {
  console.log("Executando com setInterval...");
  console.log(value);
  value--;
  if (value === 0) {
    console.log("Feliz ano novo!");
    clearInterval(interval);
  }
}, 1000);
