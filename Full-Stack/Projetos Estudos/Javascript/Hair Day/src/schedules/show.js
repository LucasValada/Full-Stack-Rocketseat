import dayjs from "dayjs";

// Seleciona as sessoes de horários disponiveis e agendados.
const periodMorning = document.getElementById("period-morning");
const periodAfternoon = document.getElementById("period-afternoon");
const periodEvening = document.getElementById("period-night");

export function scheduleShow({ dailySchedules }) {
  try {
    // Limpa as listas de agendamentos.
    periodMorning.innerHTML = "";
    periodAfternoon.innerHTML = "";
    periodEvening.innerHTML = "";
    dailySchedules.forEach((schedule) => {
      const item = document.createElement("li");
      const time = document.createElement("strong");
      const name = document.createElement("span");
      // adiciona o id do agendamento
      item.setAttribute("data-id", schedule.id);

      time.textContent = dayjs(schedule.when).format("HH:mm");
      name.textContent = schedule.name;

      // Cria o icone de cancelar o agendamento
      const cancelIcon = document.createElement("img");
      cancelIcon.classList.add("cancel-icon");
      cancelIcon.setAttribute("src", "./src/assets/cancel.svg");
      cancelIcon.setAttribute("alt", "Cancelar agendamento");

      // Adiciona o tempo, nome e icone no item.
      item.append(time, name, cancelIcon);
      // Obtém somente a hora
      const hour = dayjs(schedule.when).hour();

      // Renderiza o agendamento na sessão correta.
      if (hour < 12) {
        periodMorning.appendChild(item);
      } else if (hour > 12 && hour < 18) {
        periodAfternoon.appendChild(item);
      } else {
        periodEvening.appendChild(item);
      }
    });
  } catch (error) {
    console.error("Erro ao exibir agendamentos do dia:", error);
    alert(
      "Não foi possível exibir os agendamentos. Tente novamente mais tarde."
    );
  }
}
