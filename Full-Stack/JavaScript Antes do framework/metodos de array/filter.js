console.log("### METODOS DE ARRAY || FILTER ###");
// O método filter() cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida.
const words = ["Javascript", "HTML", "CSS", "WEB"];
const result = words.filter((word) => word.length > 3);
console.log(result);

const objProducts = [
  {
    description: "Teclado",
    price: 150,
    promotion: true,
  },
  {
    description: "Mouse",
    price: 80,
    promotion: false,
  },
  {
    description: "Notebook",
    price: 1500,
    promotion: true,
  },
];
// Exemplo de um filtro de produtos na promoçao 
const promotion = objProducts.filter((product) => product.promotion === true);
console.log(promotion);
