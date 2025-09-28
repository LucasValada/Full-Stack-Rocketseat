const input = document.querySelector("input");
// keydown - quando a tecla é pressionada (captura tudo, incluindo CTRL, SHIFT, ALT, etc)
// input.addEventListener("keydown", (event) => {
//   console.log(event.key);
// });

// keypress - quando a tecla solta é do tipo caracter
input.addEventListener("keypress", (event) => {
  console.log(event.key);
});

// quando o conteudo muda
input.onchange = (event) => {
  console.log("O INPUT MUDOU!");
};
