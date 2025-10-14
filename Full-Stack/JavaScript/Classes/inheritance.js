console.log("### Classes com Javascript || Heranças (extends) ###");
class Animal {
  constructor(name) {
    this.name = name;
  }
  makeNoise() {
    console.log("Algum som genérico do animal");
  }
}

class Dog extends Animal {
  makeNoise() {
    console.log("Au au au");
  }
}
class Cat extends Animal {
  makeNoise() {
    console.log(`${this.name} está miando: meow meow meow`);
  }
  run() {
    console.log(`${this.name} está correndo`);
  }
}
const dog = new Dog("Benenge");
console.log(dog.name);
dog.makeNoise();
const cat = new Cat("Binho");
console.log(cat.name);
cat.makeNoise();
cat.run();
