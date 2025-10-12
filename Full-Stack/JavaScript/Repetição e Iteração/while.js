//  executa um bloco de código enquanto uma condição é verdadeira
/* 
    WHILE: Executa até que a condição seja VERDADEIRA
*/
let execute = true;
while (execute) {
  let response = window.prompt("Deseja executar o programa: 1(sim) 2(não)");
  if (response === "2") {
    execute = false;
  }
}

console.log("Programa executado");
