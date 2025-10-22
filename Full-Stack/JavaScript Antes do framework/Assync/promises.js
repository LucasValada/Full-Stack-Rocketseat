console.log("### PROMISES ###");
console.log("### Async e Await ###");
// Funçao que retorna uma promise
function asyncFunction() {
  return new Promise((resolve, reject) => {
    // simula uma operação assíncrona
    setTimeout(() => {
      const isSuccess = true;
      if (isSuccess) {
        resolve("Operação bem sucedida!");
      } else {
        reject("Operação falhou!");
      }
    });
  }, 3000);
}

// Visualizando o retorno da promise
// console.log("Executando a funçao asyncFunction...");
// asyncFunction()
//   .then((response) => {
//     console.log("Sucesso:", response);
//   })
//   .catch((error) => {
//     console.log("Erro:", error);
//   })
//   .finally(() => {
//     console.log("Fim");
//   });

// Async e Await
async function fetch() {
  try {
    const response = await asyncFunction();
    console.log("sucesso:", response);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Fim.");
  }
}
fetch();

// async function fetch() {
//   const response = await asyncFunction();
//   console.log(response);
// }
// fetch();
// com arrow function
// const fetch = async () => {
//   const response = await asyncFunction();
//   console.log(response);
// };
