/*
    - Conversão de  tipos (type casting ou type conversion):
      Ocorre quando você explicitamente transforma um valor de um 
      tipo para outro. Isso é feito de forma consciente, usando funções ou métodos especificos para
      realizar a conversão.
 */

let value = "123";
console.log(typeof value);
console.log(typeof Number(value));

let age = 18;
console.log(typeof age);
console.log(typeof age.toString());
console.log(typeof String(age));

let option = 0; // tudo que for diferente de 0 é verdadeiro no boolean
console.log(Boolean(option));
console.log(typeof Boolean(option));
/* 
    - Coerção de tipos:
      acontece de forma automática (implicitamente).
      O Javascript tenta automaticamente converter um dos valores pra um tipo 
      compatível antes de realizar a operação matemática.
*/

console.log(typeof ("10" + 5));
