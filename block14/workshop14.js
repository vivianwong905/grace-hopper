//only odds
// loop through the arrays
//if it is divisible by 2 then we don't want it
//create a variable to store the new array
const result = [];
const inputArrays = [70, 42, 55, 81, 21, 91, 34];
for (i = 0; i < inputArrays.length; i++) {
  if (inputArrays[i] % 2 !== 0) {
    result.push(inputArrays[i]);
  }
}
console.log("results", result);

//vowel versus consonant
//create a few diff variables, one for vowels and consonant
// i might have to do the vowels one by one
// then all other letters goes to consonant
let vowels = 0;
let consonant1 = 0;
const inputWord = "onomonopia";
for (i = 0; i < inputWord.length; i++) {
  let letter = inputWord[i];
  if (
    letter == "a" ||
    letter == "e" ||
    letter == "i" ||
    letter == "o" ||
    letter == "u"
  ) {
    vowels++;
  } else {
    consonant1++;
  }
}
console.log("vowels", vowels);
console.log("consonant", consonant1);

// reverse array
//create a for loop
// loop through the array, and then pop it in reverse
// put it in a variable

const reverseArray = [1, 3, 5, 7, 9, 11];
const flippedArray = [];

for (let i = reverseArray.length - 1; i >= 0; i--) {
  flippedArray.push(reverseArray[i]);
}
console.log("flipped", flippedArray);

// FizzBuzz
// using for or while loop
// if it is %3 with no remainder, print fizz
// if it is %5 with no remainder, print buzz
// if it is both, print fizzbuzz

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("fizzbuzz");
  } else if (i % 5 === 0) {
    console.log("buzz");
  } else if (i % 3 === 0) {
    console.log("fizz");
  } else {
    console.log(i);
  }
}
