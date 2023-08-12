const coffeeMenu = require("./workshop_data");

// Print an array of all the drinks on the menu.
coffeeMenu.forEach((name) => console.log("name of drinks", name.name));

// Print an array of drinks that cost 5 and under.
const lessthan5 = coffeeMenu.filter((lessthan) => lessthan.price <= 5);
console.log("less than $5", lessthan5);

// Print an array of drinks that are priced at an even number.
const evenPrice = coffeeMenu.filter((even) => even.price%2 === 0);
console.log("even number", evenPrice);

// Print the total if you were to order one of every drink.
const totalPriceDrinks = coffeeMenu.reduce(
  (accu, coffeePrice) => accu +
  coffeePrice.price,
  0
);
console.log("total drink price", totalPriceDrinks);

// Print an array with all the drinks that are seasonal.
const seasonal = coffeeMenu.filter((season) => season.seasonal === true);
console.log("seasonal drinks", seasonal);


// Print all the seasonal drinks with the words "with imported beans" after the item name. For example: "affogato with imported beans".
seasonal.forEach((seaonalName) =>
console.log(seaonalName.name + " with imported beans"));