console.log("### Classes com Javascript || Estático ###");
class UserStatic {
  //   constructor(message) {
  //     this.message = message;
  //   } NÃO PRECISA INSTANCIAR NESSES CASOS, VAI SER UMA MENSAGEM 'FIXA' POR EXEMPLO, E NAO PRECISAR ACESSAR O METODO DE INSTANCIAR A CLASSE
  static showMessage() {
    console.log("Essa é uma mensagem!");
  }
}

// const userStatic = new UserStatic();
// userStatic.showMessage();

// Podemos acessar direto sem instanciar quando usamos o static methods.
UserStatic.showMessage();
// tomar cuidado com os static methods, pois eles podem ser acessados sem instanciar a classe.
