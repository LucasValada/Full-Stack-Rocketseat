window.addEventListener("load", () => {
  console.log("Página carregada!");
});

addEventListener("click", (event) => {
  event.preventDefault();

  // Retorna todas as informaçoes do evento.
  //   console.log(event);

  //Retorna o elemento que disparou o evento.
  console.log(event.target);
});
