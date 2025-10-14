console.log(
  "### Classes com Javascript || Classes para erros customizados ###"
);
class MyCustomError {
  constructor(message) {
    this.message = "CLASSE DE ERRO CUSTOMIZADA : " + message;
  }
}
try {
  //   throw new Error("Erro padrão lançado!");
  throw new MyCustomError("Erro personalizado lançado!");
} catch (e) {
  if (e instanceof MyCustomError) {
    console.log(e.message);
  } else {
    console.log("Outro tipo de erro", e);
  }
}
