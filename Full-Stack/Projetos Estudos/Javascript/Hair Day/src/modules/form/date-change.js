import { schedulesDay } from "../../schedules/load";

const selectedDate = document.getElementById("date");

// Recarrega a lista de horários ao mudar a data.
selectedDate.onchange = () => {
  const date = selectedDate.value;
  schedulesDay({ date }); // chama a função que recarrega tudo pro novo dia
};
