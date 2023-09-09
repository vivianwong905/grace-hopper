// =============== DEMO Part 3: Currying ============================================================

const numbers = [15, 12, 18, 11, 19, 14];

// define a curried function that takes two arguments and adds them
const addWithoutCurrying = (a, b) => a + b;

// creates a function that takes a as an argument
// returns a function that takes b as an argument
// that inner function retuerns a + b
const addWithCurrying = (a) => (b) => a + b;

// test our curried function
console.log(addWithoutCurrying(3, 5));
console.log(addWithCurrying(10)(20));

// TODO: #10 use the curried function to add 10 to each element in the array using map
// add(10) returns a function that adds 10 to whichever number is passed
const newNumbers = numbers.map(addWithCurrying(10));
console.log(newNumbers);
