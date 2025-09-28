const ul = document.querySelector("ul");
ul.addEventListener("scroll", (event) => {
  if (ul.scrollTop > 300) {
    console.log(ul.scrollTop);

    //   if (ul.scrollTop > 300) {
    //     console.log("Você chegou ao fim da lista");
    //   } else {
    //     console.log("Você ainda ta na lista");
    //   }

    ul.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
});

const button = document.querySelector("button");
button.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("CLICOU");
});
