// FIRST CLASS FUNCTION
// assign a function to a variable and use it to convert a string to uppercase

const word = "Welcome";
const upperString = (word) => {
  return word.toUpperCase();
};
console.log(upperString(word));

// Create a function that takes a number as input and returns another function that multiplies its input with the original number.

function firstFunc(x) {
  return function (y) {
    return x * y;
  };
}

console.log(firstFunc(3)(7), "firstFunc");

// Create a function that takes two numbers as input and returns an object.

function returnObj(a, b) {
  let input1 = a + 2;
  let input2 = b + 4;
  return { input1, input2 };
}
console.log(returnObj(5, 5), "line 28");

// HIGHER-ORDER FUNCTION
// converts all string elements to lowercase

const list = ["Hippopotamus", "King Cobra", "Giant Panda", "Crocodile"];
const finalLowerCase = list.map((name) => name.toLowerCase());

console.log(finalLowerCase, "lower case");

// Print a string that has a length of more than 11 characters.
function printLongWords(words) {
  return words.filter((word) => word.length > 11);
}
// OR
const result = list.filter((word) => word.length > 11);
console.log(result);

console.log(printLongWords(list), "print length of 11");

// Create a function using a callback that takes a string as input and returns the string in reverse order.
function reverseString(str) {
  let mapArray = str.map((string) => string.split("").reverse().join(""));
  return mapArray;
}

console.log(reverseString(list));

// currying function
const first = "https://";
const second = "www";
const third = "fullstackacademy";
const forth = "com";
const fifth = "/weather";

function cookingCurry(a) {
  return function (b) {
    return function (c) {
      return function (d) {
        return function (e) {
          return a + b + c + d + e;
        };
      };
    };
  };
}

console.log(cookingCurry(first)(second)(third)(forth)(fifth));
