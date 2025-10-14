// Seleciona os elementos do formulário
const form = document.querySelector("form");
const amount = document.getElementById("amount");
const expense = document.getElementById("expense");
const category = document.getElementById("category");
// Capture o evento de input para formatar o valor
amount.oninput = () => {
  // Obtém o valor atual e remove tudo que não for dígito
  let value = amount.value.replace(/\D/g, "");

  // Tranformar o valor em centavos
  value = Number(value) / 100;
  // Atualiza o valor do campo com o valor limpo
  amount.value = formatCurrencyBRL(value);
};

function formatCurrencyBRL(value) {
  // Formata o valor como moeda brasileira (BRL)
  value = value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  return value;
}

// Captura o evento de submit do formulário para obter os valores
form.onsubmit = (event) => {
  // Previne o comportamento padrão do formulário de enviar e recarregar a página
  event.preventDefault();
  // Cria um novo objeto de despesa com os valores do formulário
  const newExpense = {
    id: new Date().getTime(),
    expense: expense.value,
    category_id: category.value,
    category_name: category.options[category.selectedIndex].text,
    amount: amount.value,
    create_at: new Date(),
  };
  console.log(newExpense);
};
