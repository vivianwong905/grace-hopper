// =============== DEMO Part 2: Logging Functions ============================================================

// implement a higher order function that calls a function AND logs info about it
// It should log: the function name and the function's result before returning
const withLog = (func) => {
  // func === add
  return (...args) => {
    // log the name of the name of the function
    console.log(`\nAttempting to call: ${func.name}`);
    console.log(`Arguments: `, args);
    // call the function
    const returnValue = func(...args);
    // log what the function returned
    console.log(`Value it returns: ${returnValue}\n`);
    // return the value that function returned
    return returnValue;
  };
};

// test withLog with the example functions

const add = (a, b) => a + b;
const addWithLog = withLog(add); // withLog, but with func = add
const sum = addWithLog(2, 3); // returns add(2, 3)
console.log("SUM: ", sum);
addWithLog(5, 7);
addWithLog(10, 20);
addWithLog(100, 100);

const multiply = (a, b) => a * b;
const multiplyWithLog = withLog(multiply);
multiplyWithLog(2, 5);
multiplyWithLog(3, 10);
multiplyWithLog(10, 10);

const square = (a) => a * a;
const squareWithLog = withLog(square);
squareWithLog(10);

const greet = (name) => "Hello, " + name;
const greetWithLog = withLog(greet);
greetWithLog("Allie");
