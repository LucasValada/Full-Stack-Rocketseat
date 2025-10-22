// default export - é a função padrão fornecida pelo modulo
// export default function sum(a, b) {
//   return a + b;
// }
// // named export - é a funcao exportada pelo modulo
// export function multiply(a, b) {
//   return a * b;
// }

// export function sum(a, b) {
//   return a + b;
// }

// export function multiply(a, b) {
//   return a * b;
// }
// export { sum , multiply };
export class Calc {
  sum(a, b) {
    return a + b;
  }
  multiply(a, b) {
    return a * b;
  }
}
