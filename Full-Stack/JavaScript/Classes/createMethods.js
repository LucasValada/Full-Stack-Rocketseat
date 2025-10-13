console.log("### Classes com Javascript || Metodos ###");

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  sendEmail() {
    console.log(
      `Email enviado para o user ${this.name} com o email ${this.email}`
    );
  }
}

const user1 = new User("Lucas", "lucas@email");
user1.sendEmail();
