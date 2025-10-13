const creditCard = "1234-1234-1234-3456";
// console.log(creditCard.length);

// Pega os 4 ultimos digitos
const lastDigts = creditCard.slice(-4);
console.log(lastDigts);

// o padstart preeche a string do inicio
const maskedNumber = lastDigts.padStart(creditCard.length, "X");
console.log(maskedNumber);

// o padend preenche a string no final.
const number = "1234";
console.log(number.padEnd(10, "#"));
