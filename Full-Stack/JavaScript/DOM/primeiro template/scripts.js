// Visualizar o conteúdo do document.
console.log(document);

// Obter o title da página.
console.log(document.title);

// Acessar elemento pelo id (seletor ID).
const guest = document.getElementById("guest-2");
console.log("ID Selector", guest);
// Mostra as propriedades do objeto.
console.dir(guest);
// Acessar elemento pelo class (seletor class).
const guestsByClass = document.getElementsByClassName("guest");
console.log("Class Selector", guestsByClass);

// Exibir o primeiro elemento da lista.
console.log(guestsByClass.item(0));
// Exibir o segundo elemento da lista.
console.log(guestsByClass[1]);

// Selecionar lista de elementos pela tag HTML.
const guestsByTag = document.getElementsByTagName("li");
console.log("TAG Selector", guestsByTag);

// Acessa o elemento pelo selector ID.
const guestSelector = document.querySelector("#guest-1");
console.log("Query Selector", guestSelector);
// Acessa o elemento pelo selector Class.

/* SEM O SELECTOR ALL, APENAS O PRIMEIRO ELEMENTO SERÁ EXIBIDO ASSIM.
const guestSelectorClass = document.querySelector(".guest");
console.log("Query Selector whit Class", guestSelectorClass);
*/
const guestSelectorClass = document.querySelectorAll(".guest");
console.log("Query Selector whit Class", guestSelectorClass);
