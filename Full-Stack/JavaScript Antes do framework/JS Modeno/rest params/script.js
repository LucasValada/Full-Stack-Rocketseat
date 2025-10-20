// Rest params (...) permite representar um número indefinido de argumentso como um array.

function values(a, ...rest) {
  console.log(a);
  console.log(rest);
}
values(1, 2, 3, 4, 5);
// Saída:
// 1
// [2, 3, 4, 5]
