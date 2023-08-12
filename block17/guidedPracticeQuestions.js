const garageSale = require("./guidedPracticeData");

// Prompt 3
// Print an array of all the item names in garagaeSale.
garageSale.forEach((name) => console.log("prompt", name.name));

// Prompt 4
// Print an array of arrays of all the items with their prices.
// For example: [["blue sweater", 20], ["yellow raincoat", 20]];

const printItem = garageSale.map((element) => {
  return [element.name, element.price];
});
console.log("Prompt 4", printItem);

// Prompt 5
// Print an array of all the items that are less or equal to $50.

const lessthan = garageSale.filter((fifty) => fifty.price <= 50);
console.log("prompt 5", lessthan);

/* answers
[
  { name: 'blue sweater', price: 20, condition: 'new' },
  { name: 'yellow raincoat', price: 20, condition: 'new' },
  { name: 'basketball', price: 5, condition: 'used' },
  { name: 'baseball cards', price: 50, condition: 'used' },
  { name: 'frying pan', price: 10, condition: 'new' },
  { name: 'treadmill', price: 0, condition: 'broken' },
  { name: 'desk', price: 50, condition: 'used' }
]
*/

// Prompt 6
// Print an array of all the items whose condition are "used."

const usedCondit = garageSale.filter((items) => items.condition === "used");
console.log("prompt 6", usedCondit);

// Prompt 7
// Print all the prices in garageSale array into a new array.

const pricesArray = garageSale.map((x) => x.price);
console.log("prompt 7", pricesArray);
// [20, 20, 5, 200, 100,50, 10, 0,  50]

// Prompt 8
// Print the total cost of the garageSale array.

const totalCost = garageSale.reduce(
  (accu, garagePrice) => accu + garagePrice.price,
  0
);
console.log("prompt8", totalCost);
// prompt8 455

// Prompt 9
// Print the average price for the garage sale.

const eachPrice = [];
garageSale.forEach((price) => eachPrice.push(price.price));
console.log(eachPrice);
console.log("length", eachPrice.length);
const averagePrice = totalCost / eachPrice.length;
console.log("ave", averagePrice);

/* answer: 
const numberOfItems = garageSale.length; - bc i don't need the length of the price, 
the garageSale length was enough
const averagePrice = totalPrice / numberOfItems;
console.log(averagePrice); ave 50.55555555555556
*/
