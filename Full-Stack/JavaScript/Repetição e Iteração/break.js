// Break encerra a execução da repetição ou switch para seguir para a próxima linha.

/*let option = 3;
switch (option) {
  case 1:
    console.log("Opção 1");
    break;
  case 2:
    console.log("Opção 2");
    break;
  case 3:
    console.log("Opção 3");
    break;
  default:
    console.log("Opção inválida");
    break;
}
*/

// Utilizando o breeak para finalizar a repetição
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }

  console.log(i);
}
