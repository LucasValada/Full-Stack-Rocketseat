let dateFormat = new Date("2025-10-02T16:50:10");
// Formata para o dia sempre ter 2 digitos.
let day = dateFormat.getDate().toString().padStart(2, "0");
// Formata para o mes sempre ter 2 digitos.
let month = (dateFormat.getMonth() + 1).toString().padStart(2, "0");
let year = dateFormat.getFullYear();
let hour = dateFormat.getHours();
let minutes = dateFormat.getMinutes();
let seconds = dateFormat.getSeconds();
console.log(`${day}/${month}/${year} Hora: ${hour}:${minutes}:${seconds}`);
