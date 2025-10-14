console.log(
  "### Classes com Javascript || Classes para lidar com exceções ###"
);
let objClass = [17];
let index = 300;
try {
  //   objClass.execute();
  if (!objClass.includes(17)) {
    throw new Error("O valor 17 não existe"); // throw é como um return, ele para a execução do código
  } else {
    console.log("O valor 17 existe");
  }
  if (index > 99) {
    throw new RangeError(
      "Número fora de intervalo, escolha um número entre 0 e 99"
    );
  }
} catch (e) {
  if (e instanceof TypeError) {
    console.log("Erro ao executar a função");
  } else if (e instanceof RangeError) {
    console.log(e.message);
  } else {
    console.log("Não foi possível executar o código", e);
  }
}
