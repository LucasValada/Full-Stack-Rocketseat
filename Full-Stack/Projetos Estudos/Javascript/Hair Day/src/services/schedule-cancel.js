import { apiConfig } from "./api-config";
export async function scheduleCancel(id) {
  try {
    await fetch(`${apiConfig.baseUrl}/schedules/${id}`, {
      method: "DELETE",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
    });
    alert("Agendamento cancelado com sucesso!");
  } catch (error) {
    alert("Erro ao cancelar o agendamento. Tente novamente mais tarde.");
  }
}
