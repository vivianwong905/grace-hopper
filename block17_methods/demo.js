//------------------------------------- .forEach() ------------------------------------------

const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// use forEach to print every letter to console
alphabet.forEach((letter, index) => console.log(index + " = " + letter));

// This is the same as:
// for (let i = 0; i < alphabet.length; i++) {
//     console.log(alphabet[i]);
// }

//------------------------------------- .sort() ------------------------------------------

// Example 1
const fruits = ["Banana", "Pineapple", "Dragonfruit", "Mango"];

// Sort the array alphabetically
fruits.sort();
console.log(fruits);

// Example 2
const points = [40, 10, 1, 5, 51];

// sort points
points.sort();
console.log(points);

// Example 3
const points2 = [40, 10, 1, 5, 51];

// fix bug by providing a compare function to sort the numbers
const compare = (itemA, itemB) => {
  return itemA - itemB;
};

points2.sort(compare);
console.log(points2);

// Example 4
const vegetables = ["cucumber", "broccoli", "carrots", "peas", "asparagus"];

// Sort the array
vegetables.sort();
// Reverse the array
vegetables.reverse();

console.log(vegetables);

// NOTE: .sort() and .reverse() MUTATE the array!

//------------------------------------- .map() ------------------------------------------

// Example 1
const numbers = [2, 4, 6, 8];

// create a new array with the squares of those numbers using map
const squared = numbers.map((x) => x * x);

console.log("Numbers: ", numbers);
console.log("Squared: ", squared);

// Example 2
const pies = ["cherry", "apple", "pecan"];

// turn each pie into a display name (eg. "Cherry Pie")
const pieNames = pies.map((element) => {
  const firstLetter = element[0].toUpperCase();
  const restOfElement = element.split("").slice(1).join("");
  return firstLetter + restOfElement + " Pie";
});

console.log(pieNames);

//------------------------------------- .filter() ------------------------------------------

// Example 1
const ages = [28, 34, 52, 16, 17];

// Create an array of all the ages over 18 using filter
const adults = ages.filter((age) => age > 18);
console.log(adults);

// Example 2
const arrayOfNumbers = [2, 20, 21, 37, 48];

// filter the array of numbers to only get the even numbers
const onlyEvens = arrayOfNumbers.filter((element) => element % 2 === 0);
console.log(onlyEvens);

// filter the array of numbers ot only get the odd numbers
const onlyOdds = arrayOfNumbers.filter((element) => element % 2 !== 0);
console.log(onlyOdds);

//------------------------------------- .reduce() ------------------------------------------

// Example 1 - no initial accumulator value
const pointsPerQuarter = [10, 12, 22, 14];

// use reduce to calculate total score for the season
const totalSeasonScore = pointsPerQuarter.reduce(
  (accumulater, currentValue) => accumulater + currentValue
);

// Example 2 - accumulator
const players = [
  { name: "Roberta", pointsScored: 10 },
  { name: "Scarlet", pointsScored: 15 },
  { name: "June", pointsScored: 20 },
];

// use reduce to aggregate the total score
const totalScore = players.reduce(
  (total, currentPlayer) => total + currentPlayer.pointsScored,
  0
);
console.log(totalScore);

// Example 3 - convert array to object
const playersWithScore = [
  { name: "Roberta", pointsScored: 10 },
  { name: "Scarlet", pointsScored: 15 },
  { name: "June", pointsScored: 20 },
];

// use reduce to create an object mapping name => score
// Expected Output:
// {
//     Roberta: 10,
//     Scarlet: 15,
//     June: 20
// }

const nameToScoreMap = playersWithScore.reduce((obj, currentPlayer) => {
  obj[currentPlayer.name] = currentPlayer.pointsScored;
  return obj;
}, {});

// const nameToScoreMap = playersWithScore.reduce(
//     (obj, currentPlayer) => ({
//         [currentPlayer.name]: currentPlayer.pointsScored,
//         ...obj,
//     }),
//     {}
// );

console.log(nameToScoreMap);
