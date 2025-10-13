console.log("###### Date Dinamic ######");
let dateDinamic = new Date("2025-10-12T17:15:10");

// Exibe a data e hora no formato local
console.log(dateDinamic.toLocaleDateString());
console.log(dateDinamic.toLocaleTimeString());

// Exibe a data e hora no formato escolhido
console.log(dateDinamic.toLocaleDateString("en-US"));
console.log(dateDinamic.toLocaleTimeString("en-US"));

// toLocaleString
console.log("###### toLocaleString ######");
console.log(dateDinamic.toLocaleString());
console.log(dateDinamic.toLocaleString("en"));
// Exibe a data e hora em styles diferentes
console.log(
  dateDinamic.toLocaleString("pt-BR", {
    dateStyle: "full",
  })
);
console.log(
  dateDinamic.toLocaleString("pt-BR", {
    dateStyle: "long",
  })
);
console.log(
  dateDinamic.toLocaleString("pt-BR", {
    dateStyle: "medium",
  })
);
console.log(
  dateDinamic.toLocaleString("pt-BR", {
    dateStyle: "short",
  })
);
console.log(
  dateDinamic.toLocaleString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  })
);
const amount = 12.5;
console.log(
  amount.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })
);
