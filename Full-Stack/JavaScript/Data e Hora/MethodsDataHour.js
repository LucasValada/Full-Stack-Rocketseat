let date = new Date("2025-10-12T16:50:10");
// Dia da semana contando de 0-6. (Domingo é 0 e Sábado é 6, etc.)
console.log(date.getDay());
// Dia do mes contando de 0-30
console.log(date.getDate());
// Mes
console.log(date.getMonth());
// Ano
console.log(date.getFullYear());
// Horas
console.log(date.getHours());
// Minutos
console.log(date.getMinutes());
// Segundos
console.log(date.getSeconds());
// Milisegundos
console.log(date.getMilliseconds());

console.log(
  `Hoje é dia ${date.getDate()}, do mes ${date.getMonth()}, do ano de ${date.getFullYear()}.`
);
