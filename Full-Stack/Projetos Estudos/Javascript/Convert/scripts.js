//Obtendo elementos do formulário
const form = document.querySelector("form");
const amount = document.getElementById("amount");
const currency = document.getElementById("currency");
const footer = document.querySelector("main footer");
const description = document.getElementById("description");
const result = document.getElementById("result");
//Cotação de moedas do dia.
const USD = 4.87;
const EUR = 5.32;
const GBP = 6.08;
// Manipula o input para receber apenas valores numéricos
amount.addEventListener("input", () => {
  const numericRegex = /\D+/g;
  amount.value = amount.value.replace(numericRegex, "");
});

// Capturando o evento de submit(enviar) do formulário
form.onsubmit = function (event) {
  event.preventDefault();

  switch (currency.value) {
    case "USD":
      convertCurrency(amount.value, USD, "US$");
      break;
    case "EUR":
      convertCurrency(amount.value, EUR, "€");
      break;
    case "GBP":
      convertCurrency(amount.value, GBP, "£");
      break;
  }
};

// Função para converter a moeda
function convertCurrency(amount, price, symbol) {
  try {
    // Exibe corretamente o valor da moeda selecionada
    description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`;
    // Calcula o valor total da conversão
    let total = amount * price;
    // Formata o valor total para o padrão Brasileiro
    total = formatCurrencyBRL(total).replace("R$", "");

    // Exibe o resultado total
    result.textContent = `${total} Reais`;
    // Aplica uma classe que exibe o footer caso de sucesso na conversão
    footer.classList.add("show-result");
  } catch (error) {
    // Remove a classe do footer caso de erro na conversão e oculta ele.
    console.error("Erro ao converter moeda:", error);
    footer.classList.remove("show-result");
  }
}

// Função para exibir o resultado (footer)
function formatCurrencyBRL(value) {
  // Converte para numero para utilizar o toLocaleString para formatar
  // Para o padrão Brasileiro
  return Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}
