//usar a função antes dela ser declarada

showMessage("Olá, Lucas!");

function showMessage(message) {
  console.log(message); // a declaração da função é levada pro topo, onde podemos usar
  // a funcao antes dela ser declarada
  endLine();
  function endLine() {
    console.log("-----------------");
  }
}

showMessage("Tudo bem?");

// essa função nao existe nesse escopo, só dentro da function de showMessage, erro esperado.
endLine();
