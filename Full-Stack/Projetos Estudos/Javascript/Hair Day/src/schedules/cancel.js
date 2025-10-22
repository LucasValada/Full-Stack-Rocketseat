import { scheduleCancel } from "../services/schedule-cancel";
import { schedulesDay } from "./load";

const periods = document.querySelectorAll(".period");
// Gera evento de clique para cada lista de horários
periods.forEach((period) => {
  // Captura o evento de clique na lista
  period.addEventListener("click", async (event) => {
    if (event.target.classList.contains("cancel-icon")) {
      // obtem a li pai do elemento clicado
      const item = event.target.closest("li");
      // obtem o id do agendamento a partir do data-attribute
      const { id } = item.dataset;
      // Verifica se o id existe
      if (id) {
        // Pergunta ao usuário se ele tem certeza que deseja cancelar
        const isConfirm = confirm(
          "Tem certeza que deseja cancelar esse agendamento?"
        );
        if (isConfirm) {
          // Chama a função de cancelamento
          await scheduleCancel({ id });
          // Recarrega os agendamentos do dia
          schedulesDay();
        }
      }
    }
  });
});
