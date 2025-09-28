const guestsCreate = document.querySelector("ul");
const newGuest = document.createElement("li");
newGuest.classList.add("guest");
const guestName = document.createElement("span");

// guestName.textContent = "Maria";
//append adiciona um elemento filho dentro do elemento pai APÓS
const newName = document.createElement("span");
newName.textContent = "Antonia";
newGuest.append(guestName);
// Adiciona um elemento filho dentro do elemento pai ANTES (com prioridade)
newGuest.prepend(newName);
// é mais simples que o append e aceita apenas um argumento.
// newGuest.appendChild(guestName);

guestsCreate.append(newGuest);
