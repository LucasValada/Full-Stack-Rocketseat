// Intl é a API de Internacionalização do ECMAScript.
console.log("###### Intl ######");

//Obtendo a localização atual
const currentLocale = Intl.DateTimeFormat().resolvedOptions();
console.log(currentLocale);
// Formata de acordo com a localidade
console.log(new Intl.DateTimeFormat("pt-BR").format(new Date()));
console.log(new Intl.DateTimeFormat("en-US").format(new Date()));
// Diferença de timezone em minutos
let dateIntl = new Date();
console.log(dateIntl.getTimezoneOffset());
// Diferença de timezone em horas
console.log(dateIntl.getTimezoneOffset() / 60);
