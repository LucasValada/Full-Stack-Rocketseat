import { apiConfig } from "./api-config";

export async function scheduleNew({ id, name, when }) {
  try {
    // Envia para a API o novo agendamento.
    await fetch(`${apiConfig.baseUrl}/schedules`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, name, when }),
    });
    // exibe mensagem de sucesso
    alert("Agendamento criado com sucesso!");
  } catch (error) {
    console.error("Erro ao criar novo agendamento:", error);
    alert("Não foi possível criar o agendamento. Tente novamente mais tarde.");
  }
}
