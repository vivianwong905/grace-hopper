const { Pet, Dog, Cat } = require("./index");

describe("Pet", () => {
  it("creates a new Pet object", () => {
    const pet = new Pet();
    expect(pet).toBeInstanceOf(Pet);
  });
  describe("instances", () => {
    it("have properties name and age", () => {
      const spot = new Pet("Spot", 3);
      expect(spot.name).toBe("Spot");
      expect(spot.age).toBe(3);
    });
    it("have an eat method", () => {
      const pet = new Pet("Spot", 3);
      expect(pet.eat()).toBe("nom nom nom");
    });
    it("have a birthday method", () => {
      const pet = new Pet("Spot", 3);
      const pet2 = new Pet("Fido", 6);
      expect(pet.birthday()).toBe("Spot is 3 years old.");
      expect(pet2.birthday()).toBe("Fido is 6 years old.");
    });
  });
});

describe("Dog", () => {
  it("creates a new Dog object", () => {
    const dog = new Dog();
    expect(dog).toBeInstanceOf(Dog);
  });
  describe("instances", () => {
    it("have properties name, age and breed", () => {
      const dog = new Dog("Fido", 3, "Pug");
      expect(dog.name).toBe("Fido");
      expect(dog.age).toBe(3);
      expect(dog.breed).toBe("Pug");
    });
    it("have a bark method", () => {
      const dog = new Dog("Fido", 3, "Pug");
      expect(dog.bark()).toBe("Fido is barking!");
    });
    it("inherit the eat method from Pet", () => {
      const dog = new Dog("Fido", 3, "Pug");
      expect(dog.eat).toEqual(Pet.prototype.eat);
    });
    it("inherit the birthday method from Pet", () => {
      const dog = new Dog("Fido", 3, "Pug");
      expect(dog.birthday).toEqual(Pet.prototype.birthday);
    });
  });
});

describe("Cat", () => {
  it("creates a new Cat object", () => {
    const cat = new Cat();
    expect(cat).toBeInstanceOf(Cat);
  });
  describe("instances", () => {
    it("have properties name, age and furColor", () => {
      const cat = new Cat("Fluffy", 3, "Black");
      expect(cat.name).toBe("Fluffy");
      expect(cat.age).toBe(3);
      expect(cat.furColor).toBe("Black");
    });
    it("have a meow method", () => {
      const cat = new Cat("Fluffy", 3, "Black");
      expect(cat.meow()).toBe("Fluffy is meowing!");
    });
    it("inherit eat method from Pet", () => {
      const cat = new Cat("Fluffy", 3, "Black");
      expect(cat.eat).toEqual(Pet.prototype.eat);
    });
    it("inherit the eat method from Pet", () => {
      const cat = new Cat("Fluffy", 3, "Black");
      expect(cat.birthday).toEqual(Pet.prototype.birthday);
    });
  });
});
