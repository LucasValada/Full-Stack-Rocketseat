import { hoursLoad } from "../modules/form/hours-load";
import { scheduleFetchByDay } from "../services/schedule-fetch-by-day";
import { scheduleShow } from "./show";

// Seleciona o input de data do formulário.
const selectedDate = document.getElementById("date");

export async function schedulesDay() {
  // Obtem a data do input
  const date = selectedDate.value;
  // Renderiza os agendamentos do dia na tela.
  // Busca na API os agendamentos para carregar do lado direito da tela.
  const dailySchedules = await scheduleFetchByDay({ date });
  // Mostra os agendamentos do dia na tela
  scheduleShow({ dailySchedules });
  // Os horários disponiveis (horário futuro + não agendando) do lado esquerdo (form)
  hoursLoad({ date, dailySchedules });
}
