// BLOCK 15 DEMO
// - Object Literals
// - Dot & Bracket Notation
// - Updating and Deleting properties

// declare a new object called "shoe"
const shoe = {
  brand: "converse",
  price: 95,
  colors: ["red", "black"],
  activityType: ["walking", "running"],
  inventory: [
    { size: 9, count: 50 },
    { size: 10, count: 100 }, //index 0
    // <--- we'll insert a new object here with splice, see line 50
    { size: 11, count: 120 }, // index 1
  ],
};

console.log(shoe);
console.table(shoe);

// use bracket notation to
// add a boolean to indicate whether the shoe has laces
shoe["hasLaces"] = true;

// use dot notation to
// add a boolean to indicate that this shoe does not have velcro
shoe.hasVelcro = false;

console.log(shoe);

// add the color green to the list
// of available colors
shoe["colors"].push("green");
shoe.colors.push("purple");

console.log(shoe);

// remove 2 size 10 shoes from
// the inventory
shoe.inventory[0].count -= 2;

console.log(shoe);

// add a new inventory item
// size 10.5 - between 10 and 11
// with 200 new shoes
// using splice
shoe.inventory.splice(1, 0, { size: 10.5, count: 200 });

console.log(shoe);

// add a new inventory item
// size 9.5 - between 10 and 11
// with 200 new shoes
// using slice

// These are unnecessarily complicated
// Splice is easier to read here
// shoe.inventory = shoe.inventory
//     .slice(0, 1)
//     .concat([{size: 9.5, count: 200}])
//     .concat(shoe.inventory.slice(1))

// shoe.inventory = [
//     shoe.inventory[0],
//     {size: 9.5, count: 200},
//     ...shoe.inventory.slice(1)
// ]

// shoe.price = shoe.price * 0.9

shoe.price *= 0.9;

console.log(shoe);

// remove the hasVelcro
delete shoe["hasVelcro"];
// delete shoe.hasVelcro;

console.log(shoe);

// loop through and display
// all the properties and values
for (const property in shoe) {
  console.log("KEY: ", property);
  console.log("VALUE: ", shoe[property]);
  console.log("\n");
}

if (shoe.price) {
  console.log("has a price"); // this will console log
} else {
  console.log("has no price");
}

if (shoe.hasVelcro) {
  console.log("has velcro");
} else {
  console.log("does not have velcro"); // this will console log
}

// print the list of all the keys
const keys = Object.keys(shoe);
console.log("KEYS: ", keys);

// print the list of all the values
const values = Object.values(shoe);
console.log("VALUES: ", values);
