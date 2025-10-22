// o método map() chama a função callback recebida por parametro para cada elemento do array original, em ordem e constroi um novo array com base nos retornos de cada chamada. E no final, devolve o novo array
console.log("### METODOS DE ARRAY || MAP ###");

const products = ["teclado, mouse, notebook"];
// Percorrendo o array com o map
products.map((item) => {
  // {} manipulação do item que voce quer percorrer
  console.log(item);
});
// Sintaxe reduzida.
products.map((item) => console.log(item)); // () quando voce quer apenas o retorno
// Utilizando o novo objeto retornado.
const formatted = products.map((item) => {
  // return item.toUpperCase();
  return {
    id: Math.random(),
    description: item,
  };
});
console.log(formatted);
