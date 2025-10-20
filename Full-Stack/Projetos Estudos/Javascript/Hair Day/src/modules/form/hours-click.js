export function hoursClick() {
  const hours = document.querySelectorAll(".hour-available");
  hours.forEach((available) => {
    available.addEventListener("click", (selected) => {
      // Remove a classe hour-selected de todos os horários nao selecionados.
      hours.forEach((hour) => {
        hour.classList.remove("hour-selected");
      });

      // Adiciona a classe hour-selected no horário selecionado.
      selected.target.classList.add("hour-selected");
    });
  });
}
