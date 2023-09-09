const numbers = [15, 12, 18, 11, 19, 14];

// =============== DEMO Part 1: Array Methods ============================================================

// --------------- forEach example ------------------------------------------------------------------------

console.log("forEach method\n");

// use forEach to console log each number
numbers.forEach((number) => console.log(number));
// is forEach pure? Not fully - relies on numbers (it's a method); but it will return the same result every time it's called

// --------------- sort example ------------------------------------------------------------------------

console.log("sort method\n");

// use sort to reverse sort the array of numbers; console log the result
const sortedNums = numbers.slice().sort((a, b) => b - a);
// sort mutates numbers; this is not pure
// if we slice first, we get a new array instead of mutating

console.log(sortedNums);

// --------------- map example ------------------------------------------------------------------------

console.log("map method\n");

// use map to return each number squared
const squaredNums = numbers.map((number) => number * number);
// is this usage of map pure? Yes - we are leaving numbers untouched, and it will produce the same output every time

console.log(squaredNums);

// --------------- reduce example ------------------------------------------------------------------------

console.log("reduce method\n");

// use reduce to sum the numbers, then console log the result
function getSum(arrayOfNumbers) {
  return arrayOfNumbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
}
// is this usage of reduce pure? yes - if we called reduce with on this same array with this same function multiple times
// it would have the same result

console.log(getSum(numbers));
console.log(getSum([15, 12, 18, 11, 19, 14]));
console.log(getSum(numbers));

// --------------- filter example ------------------------------------------------------------------------

console.log("filter method\n");

// use filter to get all even numbers and then log the result

function getEvenNumbers(numbers) {
  return numbers.filter((number) => number % 2 === 0);
}
// is this usage of filter pure?
// yes - given the same array and the same function, it would return the same result each time
console.log(getEvenNumbers(numbers));
console.log(getEvenNumbers(numbers));
console.log(getEvenNumbers(numbers));
console.log(getEvenNumbers(numbers));
// console.log(evenNums);
