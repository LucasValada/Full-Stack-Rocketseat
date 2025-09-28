// Conseguimos colocar dentro de uma variável também

const showMessage = () => {
  console.log("Olá, Lucas!");
};

showMessage();

const showMessage2 = (username, email) => {
  //   console.log("Olá,", username, "seu email é:", email);
  console.log(`Olá, ${username}. Seu email é: ${email}`);
};

showMessage2("Lucas", "lucas@email");
