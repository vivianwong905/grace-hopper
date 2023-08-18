// PART 1: Object Prototypes
// ===============================================================

// Create an object called animal (POJO = Plain Old JavaScript Object)
const animal = {
  // name: "Spot", <-- how we add properties

  // with a method called eat
  eat: function () {
    // that console logs 'nom nom nom'
    console.log("nom nom nom");
  },
};

animal.eat();

// create an object called dog
const dog = {
  // with a method called woof
  woof: function () {
    // that console logs "Woof!"
    console.log("Woof!");
  },
};

dog.woof();

// Directly set the internal prototype of dog to animal
dog.__proto__ = animal;

// Set internal prototype with Object.setPrototypeOf
// same effect as directly setting __proto__
// Object.setPrototypeOf(dog, animal);

// Call the eat method stored on dog
dog.eat();

// PART 2: Classes
// ===============================================================

class Pet {
  constructor(name, age) {
    // this = instance of Pet
    this.name = name;
    this.age = age;
  }

  eat() {
    return "nom nom nom";
  }

  birthday() {
    return `${this.name} is ${this.age} years old.`;
  }
}

class Dog extends Pet {
  constructor(name, age, breed) {
    super(name, age);
    // no need to directly assign these here
    // super will handle it
    // when it calls the Pet constructor
    // this.name = name;
    // this.age = age;
    this.breed = breed;
  }

  bark() {
    return `${this.name} is barking!`;
  }
}

class Cat extends Pet {
  constructor(name, age, furColor) {
    super(name, age);
    this.furColor = furColor;
  }

  meow() {
    return `${this.name} is meowing!`;
  }
}

module.exports = {
  Pet,
  Dog,
  Cat,
};
