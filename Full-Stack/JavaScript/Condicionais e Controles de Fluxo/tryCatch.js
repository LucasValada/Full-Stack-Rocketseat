/*try {
  console.log(result);
  //TENTA executar algo
} catch (error) {
  // CAPTURA o erro para tratar.
  console.log(
    "Não foi possível executar o seu pedido. Tente novamente mais tarde",
    error
  );
  //   console.log(error);
} finally {
  //bloco pra executar algo mesmo se deu certo ou errado.
  console.log("fim");
}
*/

let result = 0;
try {
  if (result === 0) {
    throw new Error("o valor é iual a 0.");
  }
} catch (error) {
  console.log(error);
} finally {
  console.log("fim");
}
