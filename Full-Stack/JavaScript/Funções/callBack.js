// CALLBACK FUNCTION: é uma função passada para outra função como um argumento.

function execute(taskName, callback) {
  console.log("executando a tarefa: ", taskName);
  callback(); //ela só está executando aqui, pois ela foi passada como argumento
}

function callback() {
  console.log("Tarefa finalizada!");
}

// Passando para a função
execute("Download do arquivo...", callback);

// Criado a função no proprio parametro.

execute("Upload do arquivo...", function () {
  console.log("Função de callback com uma função anonima...");
});

// Utilizando Arrow Function
execute("Excluindo arquivo...", () => {
  console.log("Arquivo excluído!");
});
// Mais simples, a chave {} so é necessaria quando houver mais de uma linha
execute("Salvando arquivo...", () => console.log("Arquivo salvo!"));
