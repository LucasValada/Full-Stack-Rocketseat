import { apiConfig } from "./api-config";

export async function scheduleCancel(id) {
  try {
    await fetch(`${apiConfig.baseUrl}/schedules/${id}`, {
      method: "DELETE",
    });
    alert("Agendamento cancelado com sucesso!");
  } catch (error) {
    console.error("Erro ao cancelar:", error);
    alert("Erro ao cancelar agendamento.");
  }
}
