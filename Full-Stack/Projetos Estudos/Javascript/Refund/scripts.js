// Seleciona os elementos do formulário
const form = document.querySelector("form");
const amount = document.getElementById("amount");
const expense = document.getElementById("expense");
const category = document.getElementById("category");

// Seleciona os elemetos da lista
const expenseList = document.querySelector("ul");
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

  // Chama a função para adicionar a despesa na lista
  expenseAdd(newExpense);
};

function expenseAdd(newExpense) {
  try {
    // Cria o elemento li para a nova despesa
    const expenseItem = document.createElement("li"); // Cria o elemento li
    expenseItem.classList.add("expense"); // Adiciona a classe CSS

    // Cria o icone da categoria
    const expenseIcon = document.createElement("img"); // Cria o elemento img
    expenseIcon.setAttribute("src", `img/${newExpense.category_id}.svg`); // Define o src da imagem
    expenseIcon.setAttribute("alt", newExpense.category_name); // Define o alt da imagem
    expenseIcon.classList.add("expense-icon"); // Adiciona a classe CSS

    // Adiciona as informações no item.
    expenseItem.append(expenseIcon);
    // Adiciona o item na lsita
    expenseList.append(expenseItem);
  } catch (error) {
    alert("Erro ao adicionar despesa: " + error.message);
  }
}
