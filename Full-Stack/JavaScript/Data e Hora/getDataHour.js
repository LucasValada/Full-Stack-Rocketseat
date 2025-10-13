// Obtendo data e hora no javascript.
const date = new Date();
console.log(date);
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDate());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getMilliseconds());
console.log(date.getTime());

// Definindo uma data especifica com ano, mes(0-11) e dia.
const date2 = new Date(2025, 9, 12);
console.log(date2);

// Define data e hora
console.log(new Date(2025, 9, 12, 16, 25, 0));

// definindo data e hora com string
console.log(new Date("2025-10-12T16:25:00"));
console.log(new Date("October 12, 2025 16:25:00"));
