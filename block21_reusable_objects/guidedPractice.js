/* Create a JavaScript class of Home. Include the following:

A construct that accepts rooms, bathrooms, and squareFeet
A method that uses the `this` keyword to return the number of rooms, bathrooms, and how many square feet
*/

class Home {
    constructor(rooms, bathrooms, squareFeet) {
        this.rooms = rooms;
        this.bathrooms = bathrooms;
        this.squareFeet = squareFeet;
    }
    roomInfo() {
        return `This home has ${this.rooms} rooms, ${this.bathrooms} bathrooms, and is ${this.squareFeet} square feet.`;
    }
}



// Create a SingleFamilyHome subclass. Include all of the Home parameters plus yardSize. 

class SingleFamilyHome extends Home {
    constructor(rooms, bathrooms, squareFeet, yardSize) {
        super(rooms, bathrooms, squareFeet);
        this.yardSize = yardSize;
    }
    singleFamilyInfo() { // can we use a diff name for this method?
    return `${super.roomInfo()} It has a ${this.yardSize} square foot yard.`;
  }
}





// Create an Apartment subclass. Include all of the Home parameters plus which floor the unit is on.

class Apartment extends Home {
  constructor(rooms, bathrooms, squareFeet, floor) {
    super(rooms, bathrooms, squareFeet);
    this.floor = floor;
  }
  roomInfo() {
    return `${super.roomInfo()} It is on floor ${this.floor}.`;
  }
}