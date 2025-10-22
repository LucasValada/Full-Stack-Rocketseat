console.log("### Event Loop ###");
// (1) Execução assíncrona é imediatamente retornada para o navegador.
console.log(1);

// (4) micro-task - ela é executada antes de temporizadores e promises.
queueMicrotask(() => {
  console.log(2);
});
// (5) ultimo a ser executado por ser uma macro task - temporizador - aguarda o evento de temporizador para ser executado
setTimeout(() => {
  console.log(3);
}, 1000);

// (2) Execução assíncrona é imediatamente retornada para o navegador.
console.log(4);

// (3) micro-task - onde ele vai ser executada depois da promise
Promise.resolve(true).then(() => {
  console.log(5);
});
