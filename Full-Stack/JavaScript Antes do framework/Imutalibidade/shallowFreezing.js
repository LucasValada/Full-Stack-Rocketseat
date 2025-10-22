console.log("### SHALLOW FREEZING ###");
// impede que o objeto seja modificado.
const book = {
  title: "Objetos Imutáveis",
  category: "JavaScript",
  author: {
    name: "Lucas",
    email: "lucas@email",
  },
};

// book.category = "HTML"; // o js nao impoe restrições para modificar o objeto

// Object.freeze() impede que o objeto seja modificado
Object.freeze(book);

// Object freeze não impede modificações profundas em objetos aninhados;
book.category = "HTML";
book.author.name = "Valadão";

console.log(book);

console.log("### DEEP FREEZING ###");
// CONSISTE EM CONGELAR DE FORMA PROFUNDA UM OBJETO

function deepFreeze(object) {
  // obtem um array com todas as props do objeto
  const props = Reflect.ownKeys(object);
  // Itera sobre todas as props do objeto
  for (const prop of props) {
    // obtem o valor da propriedade
    const value = object[prop];

    // se o valor for um objeto ou uma funcao, chama a funcao recursivamente
    if ((value && typeof value === "object") || typeof value === "function") {
      deepFreeze(value);
    }
  }

  // Congela o objeto e retorna ele
  return Object.freeze(object);
}
deepFreeze(book);
console.log("Chama a funçao deepFreeze", book);
