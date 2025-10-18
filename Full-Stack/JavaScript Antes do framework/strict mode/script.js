/* O strict mode (modo estrito): ativando esse modo, os erros que 
eram silenciosos passa a gerar exceções no Javascript.
*/

"use strict"; // pode usar no escopo global ou no escopo da funçao
function showMessage() {
  let personName = "Lucas";
  console.log("Ola", personName);
}
showMessage();

class Student {
  get point() {
    return 7;
  }
}
let student = new Student();
// student.point = 10; // Erro, pois n pode atribuir valor a um getter
console.log(student.point);
// tentando deletar uma propriedade nao deletavel de um objeto
// delete window.document; // Erro

/*function sum(a, a, c) {
  // Erro, parametros duplicados
//   return a + a + c;
}*/
