const address1 = {
  street: "Av. Brasil",
  number: 300,
};
// Isso não é uma cópia. é uma referencia
// const address2 = address1;
// address2.number = 20;

// criando um novo objeto a partir de address1
// const address2 = { ...address1, number: 20 };

// ou
const address2 = {
  ...address1,
  number: 20,
};
console.log(address1, address2);
// Exemplo com array
const array1 = [1, 2, 3];
const array2 = [...array1, 4];
console.log(array1, array2);

const list1 = ["Apple", "Orange"];
const list2 = [...list1];
list2.push("Banana");
console.log(list1, list2);

console.log("### Manipulando objetos imutáveis ###");
const bookImut = {
  title: "Objetos Imutáveis",
  category: "JavaScript",
  author: {
    name: "Lucas",
    email: "lucas@email",
  },
};

const updateBook = {
  ...bookImut,
  title: "Criando um front-end moderno",
  category: "html",
  type: "Programação",
};

console.log(bookImut);
// Modificado
console.log(updateBook);

// Utilizando rest operator
const { category, ...updateBook2 } = bookImut;
console.log(updateBook2);
