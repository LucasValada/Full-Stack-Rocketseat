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

    // Cria o icone da categoria
    const expenseIcon = document.createElement("img"); // Cria o elemento img
    expenseIcon.setAttribute("src", `img/${newExpense.category_id}.svg`); // Define o src da imagem
    expenseIcon.setAttribute("alt", newExpense.category_name); // Define o alt da imagem

    // Cria a descrição da despesa
    const expenseInfo = document.createElement("div"); // Cria o elemento div

    // Cria o valor da despesa
    const expenseAmount = document.createElement("span");
    expenseAmount.textContent = newExpense.amount; // Define o texto do valor
    expenseAmount.innerHTML = `<small>R$</small>${newExpense.amount
      .toUpperCase()
      .replace("R$", "")}`; // Formata o valor com R$ em um span separado
    // Cria o nome da despesa
    const expenseName = document.createElement("strong");
    expenseName.textContent = newExpense.expense; // Define o texto do nome da despesa

    // Cria a categoria da despesa
    const expenseCategory = document.createElement("span");
    expenseCategory.textContent = newExpense.category_name; // Define o texto da categoria

    // Adiciona as classes CSS
    expenseIcon.classList.add("expense-icon");
    expenseInfo.classList.add("expense-info");
    expenseItem.classList.add("expense");
    expenseAmount.classList.add("expense-amount");

    // Adiciona as informações no item.
    expenseItem.append(expenseIcon, expenseInfo, expenseAmount);
    // Adiciona o item na lista
    expenseList.append(expenseItem);
    // Adiciona as informações da despesa na div de informação
    expenseInfo.append(expenseName, expenseCategory);
  } catch (error) {
    alert("Erro ao adicionar despesa: " + error.message);
  }
}
