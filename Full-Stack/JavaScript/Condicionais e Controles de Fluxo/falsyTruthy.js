/* 
    FALSY quando um valor é considerado false e TRUTHY quando é considerado verdadeiro em contextos onde
    um boolean é obrigatorio (condicionais e loops).
*/

console.log("### EXEMPLOS DE FALSY ###");
console.log(false ? "verdadeiro" : "falso");
console.log(0 ? "verdadeiro" : "falso");
console.log(-0 ? "verdadeiro" : "falso");
console.log("" ? "verdadeiro" : "falso");
console.log(null ? "verdadeiro" : "falso");
console.log(undefined ? "verdadeiro" : "falso");
console.log(NaN ? "verdadeiro" : "falso");

console.log("### EXEMPLOS DE TRUTHY ###");
console.log(true ? "verdadeiro" : "falso");
console.log(1 ? "verdadeiro" : "falso"); //diferente de 0
console.log(-1 ? "verdadeiro" : "falso"); //diferente de 0 é verdadeiro
console.log("0" ? "verdadeiro" : "falso"); //string com valor 0
console.log("Lucas" ? "verdadeiro" : "falso"); //string
console.log("false" ? "verdadeiro" : "falso"); //string
console.log(" " ? "verdadeiro" : "falso"); //espaço em branco conta como caractere
console.log({} ? "verdadeiro" : "falso"); //objeto
console.log([] ? "verdadeiro" : "falso"); //array
