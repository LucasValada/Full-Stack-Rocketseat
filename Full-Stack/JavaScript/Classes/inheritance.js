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
    console.log("meow meow meow");
  }
}
const dog = new Dog("Benenge late:");
console.log(dog.name);
dog.makeNoise();
const cat = new Cat("Rubinho mia:");
console.log(cat.name);
cat.makeNoise();
