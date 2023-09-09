//  first class function
// assign a function to a variable and use it to convert a string to uppercase

const word = 'Welcome';
const upperString = word.toUpperCase();
console.log(upperString);

// Create a function that takes a number as input and returns another function that multiplies its input with the original number.
 
// curryingexample 
const multiply = (a, takeNum) => a * takeNum;
// const takeNum = 7; 
function takeNum(num1) {
  return () => {
    const multiply = takeNum(num1) * num2;
  }
}
console.log('test', takeNum(3)(7));

// console.log('test', multiply(3, takeNum));

// Create a function that takes two numbers as input and returns an object.

// function returnObj(a, b){
//     return 
// }