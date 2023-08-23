// create an object labeled customer and add the following key: value pair
const customer = {
  firstName: "jake",
  lastName: "smith",
  email: "jaekSmih!aol.com",
  phone: undefined,
  zipCode: "631",
  favoriteFlavors: 32,
  cupSize: "medium",
  favoriteStore: "Target",
  firstVisit: false
}

/*
Modify the following properties in the customer object using bracket notation: 
email to "Jak3Smith1992@email.com"
phone to 3195551234
zipCode to "63132"
favoriteFlavors to "coffee", "strawberry", and "matcha"
*/

customer["email"] = "Jak3Smith1992@email.com";
customer["phone"] = 3195551234;
customer["zipCode"] = "63132";
customer["favoriteFlavors"] = ["coffee", "strawberry", "matcha"];

/*
Delete the following properties in the customer object using the delete keyword.
zipCode
favoriteStore
*/
delete customer["zipCode"];
delete customer["favoriteStore"];

/*
Add the following key:values to the customer object using dot notation:
toppings: "chocolate sprinkles", "wafer straws", and "gummy bears"
futureFlavors: "mango"
todaysPurchaseCost: 5.32
*/
customer.futureFlavors = "mango";
customer.toppings = ["chocolate sprinkles", "wafer straws", "gummy bears"];
customer.todaysPurchaseCost = 5.32;

// In an array, print the keys in your survey
console.log(Object.keys(customer));