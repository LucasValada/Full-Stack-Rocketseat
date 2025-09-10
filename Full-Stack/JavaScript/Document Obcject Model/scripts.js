// Acessando o conteúdo do document (LEMBRANDO QUE: a palavra document já é reservada no JS, logo nao precisa passar um valor)
console.log(document)

// Acessando o título da página pelo document anterior
console.log('TITULO:', document.title)

// Acesssando elementos atraves do ID
const meuNome = document.getElementById('guest-1')
console.log('MEU NOME EM UM ELEMENTO:', meuNome)

const guest = document.getElementById('guest-2')
console.log('NOME DO CONVIDADO 2:', guest)

// Acessando propriedades de um objeto com ID
console.dir(guest)

// Acessando um elemento pelo nome da classe
const guestByClass = document.getElementByClassName('guest')
console.log(guestByClass)

// Exibindo o primeiro elemento da coleção
console.log(guestByClass[0]) //ou 
console.log(guestByClass.item(0))