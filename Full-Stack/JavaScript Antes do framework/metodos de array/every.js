console.log("### METODOS DE ARRAY || EVERY ###");
// teste se todos os elementos do array passam na condição e retorna um valor Booleano.

// Exemplo de array de idades
const ages = [18, 19, 20, 25, 30];

// Verificando se todas as idades sao maiores ou igual a 18
const allAdults = ages.every((age) => age >= 18);
console.log(allAdults);
