// Manipulando conteudo de templates

var guestManipulation = document.querySelector("#guest-1 span");
// Retorna o conteudo como texto.
console.log(guestManipulation.textContent); // Retorna o conteudo visivel e oculto
// var showContent = document.getElementsByClassName("hide"); mesmo oculto podemos acessar esse elemento
// o . serve para acessar as propriedades do objeto

// guestManipulation.textContent = "Lucas Valadão";

console.log(guestManipulation.innerText); // Retorna o conteudo como texto
console.log(guestManipulation.innerHTML); // Retorna o conteudo como HTML

