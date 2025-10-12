/* 
    FOR repete até que a condição seja FALSA.
    - variável de controle
    - condição 
    - incremento ou decremento 
    iteração são as voltas que o loop vai dar


*/
for (step = 0; step < 10; step++) {
  console.log(step);
}

// Exemplo de tabuada.
console.log("### TABUADA ###");
console.log(`7X0 = ${7 * 0}`);
console.log(`7X1 = ${7 * 1}`);
console.log(`7X2 = ${7 * 2}`);
console.log(`7X3 = ${7 * 3}`);
console.log(`7X4 = ${7 * 4}`);
console.log(`7X5 = ${7 * 5}`);
console.log(`7X6 = ${7 * 6}`);
console.log(`7X7 = ${7 * 7}`);
console.log(`7X8 = ${7 * 8}`);
console.log(`7X9 = ${7 * 9}`);
console.log(`7X10 = ${7 * 10}`);

let tabuada = 7;
for (tabuada = 0; tabuada < 10; tabuada++) {
  console.log(` ${tabuada} X ${tabuada} = ${7 * tabuada}`);
}
