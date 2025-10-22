// Utilizando o fetch com o then
// fetch("http://localhost:3333/products")
//   .then((responseOne) => {
//     responseOne.json().then((dataResponseFirst) => {
//       console.log(dataResponseFirst);
//     });
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("Fim com apenas o fetch");
//   });
// Usando o async e await como exemplo agora

// async function fetchProductsTryCatch() {
//   try {
//     const responseTry = await fetch("http://localhost:3333/products");
//     const dataResponse = await responseTry.json();
//     console.log(dataResponse);
//   } catch (error) {
//     console.log(error);
//   } finally {
//     console.log("Fim");
//   }
// }
// fetchProductsTryCatch();

// console.log("### PARAMETROS NA REQUISIÇÃO ###");
// async function fetchProductsById(id) {
//   const result = await fetch(`http://localhost:3333/products/${id}`);
//   const dados = await result.json();
//   console.log(dados);
// }
// fetchProductsById("1");
async function fetchProducts() {
  const response = await fetch("http://localhost:3333/products");
  const data = await response.json();
  console.log("### fetchProducts com ASYNC e AWAIT  FETCH E POST ###", data);
}
fetchProducts();

const productName = document.getElementById("name");
const productPrice = document.getElementById("price");
const form = document.getElementsByTagName("form");
addEventListener("submit", async (event) => {
  event.preventDefault();

  await fetch("http://localhost:3333/products", {
    method: "POST", // metodo de envio
    headers: {
      "Content-Type": "application/json", // formato que vai ser enviado
    },
    body: JSON.stringify({
      // tipo de formato lido
      id: new Date().getTime().toString(), // id unico convertido para string com uma data
      name: productName.value, // pegando o elemento com o id name do input
      price: productPrice.value, // pegando o elemento com o id price do input
    }),
  });

  await fetchProducts();
});
