console.log("### Classes com Javascript || Objeto Prototype ###");
const address = {
  city: "São Paulo",
  country: "Brasil",
};
console.log(address);

const users = ["lucas", "ana", "joão"];
console.log(users);
console.log(users.__proto__);
console.log(address.__proto__);
console.log(address.__proto__ === Object.prototype);
console.log(users.__proto__ === Array.prototype);
console.log(address.__proto__.__proto__ === null);
console.log(users.__proto__.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__ === null);
console.log(Array.prototype.__proto__ === Object.prototype);

function myFunc() {}
console.log(myFunc.__proto__ === Function.prototype);
