// for in executa iterações a partir de um objeto e percorre as propriedades de um objeto.

let person = {
  name: "Lucas",
  surname: "Valadão",
  email: "lucas@email",
};

for (let property in person) {
  // Exibe o nome da propriedade
  console.log(property);

  // Exibe o conteudo da propriedade
  console.log(person[property]);
}
let students = ["Lucas", "Joaquim", "Maria"];
for (let student in students) {
  console.log(students[student]);
}
