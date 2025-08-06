/* console.log(name); undefined
var name = "Lucas Valadao"; */

// Hoisting

// var user;
// console.log(user);

//escopo global
var email = "lucas@email.com";

{
  //escopo de bloco
  console.log(email);
}

{
  var age = 18; //funciona pq o var tem escopo global
  // let age = 18; não vai funcionar pq respeita o escopo onde ele foi criado
}

console.log(age);

let addres = "Rua X";
{
  addres = "Rua Y";
  console.log(addres);
}
