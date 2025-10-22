// O método findIndex() retorna o ídnice no array do primeiro elemento que satisfizer a condição. Caso contrário, retorna -1.
console.log("### METODOS DE ARRAY || FINDINDEX ###");
const values = [4, 6, 7, 10];
// obtendo o primeiro indice do elemento que o valor é maior que 4.
console.log(values.findIndex((value) => value > 4));

const index = values.findIndex((value) => value > 4);
console.log(index);
console.log(values[index]);

// Exemplo de quando nao encontra
console.log(values.findIndex((value) => value > 12));
