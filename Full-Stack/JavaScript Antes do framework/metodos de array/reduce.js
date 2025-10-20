/*
    O método reduce é utilizado para reduzir um arrau a um único valor

    Parametros:
    - Array original (values)
    - Acumulador 
    - Valor da iteração (currentValue)
    - Valor inicial (0)
    - Index (index)

*/
console.log("### METODOS DE ARRAY || REDUCE ###");

const reduceOriginal = [1, 2, 3, 4, 5];
const sum = reduceOriginal.reduce((accumulator, currentValue) => {
  console.log("ACUMULADOR", accumulator);
  console.log("CURRENT VALUE", currentValue);
  console.log("INDEX", index);

  console.log("soma", accumulator + currentValue);
  console.log("######");
  return accumulator + currentValue;
}, 10);
console.log("RESULTADO FINAL DA SOMA", sum);
