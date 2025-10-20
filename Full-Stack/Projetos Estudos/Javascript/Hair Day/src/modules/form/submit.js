import dayjs from "dayjs";
import { scheduleNew } from "../../services/schedule-new";
import { schedulesDay } from "../../schedules/load";
const form = document.querySelector("form");
const selectedDate = document.getElementById("date");
const inputToday = dayjs(new Date()).format("YYYY-MM-DD");
const clientName = document.getElementById("client");
// Carrega a data atual.
selectedDate.value = inputToday;
// Define a data minima como a data atual.
selectedDate.min = inputToday;
form.onsubmit = async (event) => {
  event.preventDefault();
  try {
    // Recuperando o nome do cliente.
    const name = clientName.value.trim();

    if (!name) {
      return alert("Por favor, insira seu nome.");
    }
    // Recuperando a data selecionada.
    const hourSelected = document.querySelector(".hour-selected");
    // Verificando se um horário foi selecionado.
    if (!hourSelected) {
      return alert("Por favor, selecione um horário.");
    }
    // Recuperando o valor do horário selecionado.
    const [hour] = hourSelected.innerText.split(":");
    // Insere a hora na data
    const when = dayjs(selectedDate.value).add(hour, "hour");
    const id = new Date().getTime();
    // Faz o agendamento
    await scheduleNew({
      id,
      name,
      when,
    });
    // Recarrega os agendamentos
    await schedulesDay();
    // Reseta o formulário após o agendamento.
    clientName.value = "";
  } catch (error) {
    alert(error);
    console.log(error);
  }
};
