class User {
  constructor({ name, email }) {
    this.name = name;
    this.email = email;
  }
  sendMessage() {
    console.log(
      `Mensagem enviada para o user ${this.name} com o email ${this.email}`
    );
  }
}

let user = new User({ name: "Lucas", email: "lucas@email" });
user.sendMessage();
