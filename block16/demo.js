// PART 1: Function Keyword ----------------------------------------------

// Create a function for calculating and console logging the area of a rectangle
// Formula: length x height
function printRectangleArea(length, height) {
  console.log(length * height);
}

printRectangleArea(5, 10);

// Create a function for calculating and console log area of a square
// Formula: length x height
function printSquareArea(size) {
  // size = 5
  // could just do console.log(size * size)
  // OR we can reuse our existing function
  printRectangleArea(size, size); // 5, 5
}

printSquareArea(5);

// Create a function for calculating and logging area of a triangle
// Formula: 1/2 of the base x height
function areaOfTriangle(base, height) {
  console.log(0.5 * base * height);
}

areaOfTriangle(4, 5);

// PART 2: Arrow Functions ------------------------------------------------

// Create a function for calculating and logging
// the area of a circle
// Formula: pi x ( radius ) ^ 2
// pi in JavaScript = Math.PI

const areaOfCircle = (radius) => {
  console.log(Math.PI * radius * radius);
};

areaOfCircle(5);

// Create a function for calculating and logging
// the circumference of a circle
// Formula: 2 x pi x radius

// If you only have 1 parameter
// you can ommit ()

// If you only have 1 line of code in the code block
// You can ommit the {}
const circumferenceOfCircle = (radius) => console.log(2 * Math.PI * radius);

circumferenceOfCircle(2);

// PART 3: return keyword -------------------------------------------------

// getRectangleArea
function getRectangleArea(length, height) {
  return length * height;
}

const rectangle1 = getRectangleArea(5, 10);
const rectangle2 = getRectangleArea(10, 50);
console.log("Here is rectangle 1: ", rectangle1);
console.log("Here is rectangle 2: ", rectangle2);

// getSquareArea
function getSquareArea(size) {
  // size = 5
  // could just do console.log(size * size)
  // OR we can reuse our existing function
  return getRectangleArea(size, size); // 5, 5
}

const square1 = getSquareArea(5);
const square2 = getSquareArea(10);
console.log("Here is square 1: ", square1);
console.log("Here is square 2: ", square2);

// getTriangleArea
const getAreaOfTriangle = (base, height) => 0.5 * base * height;

const triangle = getAreaOfTriangle(4, 5);
console.log("Area of triangle is: ", triangle);

// getCircleArea
const getCircleArea = (radius) => Math.PI * radius * radius;

const circle = getCircleArea(5);
console.log("Area of circle: ", circle);

// getCircleCircumference

const getCircumference = (radius) => 2 * Math.PI * radius;

const circle2 = getCircumference(2);
console.log("circumference of circle: ", circle2);

// Rectangle object ----------

const rectangle = {
  length: 10,
  height: 50,
};

console.log(getRectangleArea(rectangle.length, rectangle.height));

// Triangle object ----------

const triangleObj = {
  base: 100,
  height: 500,
};

console.log(getAreaOfTriangle(triangleObj.base, triangleObj.height));
