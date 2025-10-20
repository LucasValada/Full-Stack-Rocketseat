import dayjs from "dayjs";
import { openingHours } from "../../utils/opening-hours";
import { hoursClick } from "./hours-click";

const hours = document.getElementById("hours");

export function hoursLoad({ date, dailySchedules }) {
  // Limpa a lista de horários.
  hours.innerHTML = "";

  // ✅ Corrigido: evita erro quando dailySchedules é undefined
  const unavailableHours = (dailySchedules ?? []).map((schedule) =>
    dayjs(schedule.when).format("HH:mm")
  );

  const opening = openingHours.map((hour) => {
    const [scheduleHour] = hour.split(":");

    // Adiciona a hora na data e verifica se é passado
    const isHourPast = dayjs(date).add(scheduleHour, "hour").isBefore(dayjs());

    const available = !unavailableHours.includes(hour) && !isHourPast;
    return { hour, available };
  });

  // Renderiza os horários na tela.
  opening.forEach(({ hour, available }) => {
    if (hour === "09:00") hourHeaderAdd("Manhã");
    else if (hour === "13:00") hourHeaderAdd("Tarde");
    else if (hour === "18:00") hourHeaderAdd("Noite");

    const li = document.createElement("li");
    li.classList.add("hour", available ? "hour-available" : "hour-unavailable");
    li.textContent = hour;
    hours.append(li);
  });

  // Ativa o clique nos horários disponíveis.
  hoursClick();
}

function hourHeaderAdd(title) {
  const header = document.createElement("li");
  header.classList.add("hour-period");
  header.textContent = title;
  hours.append(header);
}
