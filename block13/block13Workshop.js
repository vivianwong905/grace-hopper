// workshop 'is truthy'
// assign a variable 
// if value is truthy, print true
// if value is falsy, print the corresponding results:
//  'the boolean value false is falsy"...etc

let string = 'I am a string';
let falseValue = false;
let nullValue = null;
let undefinedValue = undefined;
let num = 0;
let emptyString = "";

if (string) {
    console.log(true);
} else {
    console.log(false);
}
if (falseValue) {
  console.log(true);
} else {
  console.log("The boolean value false is falsy");
}
if (nullValue) {
  console.log(true);
} else {
  console.log("The null value is falsy");
}
if (undefinedValue) {
  console.log(true);
} else {
  console.log("undefined is falsy");
}
if (num) {
  console.log(true);
} else {
  console.log("The number 0 is falsy (the only falsy number)");
}
if (emptyString) {
  console.log(true);
} else {
  console.log("The empty string is falsy (the only falsy string)");
}

// Number Line
// 1. create two variables name num1 and num2
// 2. add the sum of two numbers together
// 3. print results 

let num1 = 50;
let num2 = 51;
let sum = num1 + num2;
sum > 100 ? console.log("101 is greater than 100") : console.log(false);

num1 = 99;
num2 = -2;
sum = num1 + num2;
sum > 0 ? console.log("97 is greater than 0") : console.log(false);

num1 = 0;
num2 = 101;
sum = num1 + num2;
sum > 100 ? console.log("101 is greater than 100") : console.log(false);

num1 = 500;
num2 = -500;
sum = num1 + num2;
sum ===0? console.log("0 is equal to 0") : console.log(false);

num1 = -1000;
num2 = 0;
sum = num1 + num2;
sum < 0 ? console.log("-1000 is a negative number") : console.log(false);

num1 = -5;
num2 = 0;
sum = num1 + num2;
sum < 0 ? console.log("-5 is a negative number") : console.log(false);


//Greater than 5
//create 2 num varibles
//if num1 && num2 greater or equal to 5 print true
//otherwise print false
let number1= 5;
let number2= 6;
if(number1 >= 5 && number2 >=5){
    console.log(true);
}else{
    console.log(false);
}
number1= 10;
number2= 11
if(number1 >= 5 && number2 >=5){
    console.log(true);
}else{
    console.log(false);
}
number1= 0;
number2= 0;
if(number1 >= 5 && number2 >=5){
    console.log(true);
}else{
    console.log(false);
}
number1=1000;
number2= -1000;
if(number1 >= 5 && number2 >=5){
    console.log(true);
}else{
    console.log(false);
}
number1= 6;
number2= 4;
if(number1 >= 5 && number2 >=5){
    console.log(true);
}else{
    console.log(false);
}
number1= 5;
number2= 5;
if(number1 >= 5 && number2 >=5){
    console.log(true);
}else{
    console.log(false);
}


// pair and compare
//create 4 param varibles
//compare 2 sets of params if they strictly equal eachother
let param1A = "cat";
let param1B = "cat";
let param2A= 6;
let param2B= "6";
let result1 = param1A === param1B;
let result2= param2A === param2B;
if(result1 || result2){
    console.log(true);
}else{
    console.log(false);
}
param1A = "five";
param1B = 5;
param2A= "dog";
param2B= "dawg";
result1 = param1A === param1B;
result2= param2A === param2B;
if(result1 || result2){
    console.log(true);
}else{
    console.log(false);
}
param1A = 0;
param1B = false;
param2A= "horse";
param2B= "horse";
result1 = param1A === param1B;
result2= param2A === param2B;
if(result1 || result2){
    console.log(true);
}else{
    console.log(false);
}
param1A = "eight";
param1B = "eight";
param2A= "ate";
param2B= "ate";
result1 = param1A === param1B;
result2= param2A === param2B;
if(result1 || result2){
    console.log(true);
}else{
    console.log(false);
}
param1A = 11;
param1B = "eleven";
param2A = "four";
param2B = "for";
result1 = param1A === param1B;
result2 = param2A === param2B;
if (result1 || result2) {
  console.log(true);
} else {
  console.log(false);
}

param1A = "cake";
param1B = "cake";
param2A = "pie";
param2B = "pie";
result1 = param1A === param1B;
result2 = param2A === param2B;
if (result1 || result2) {
  console.log(true);
} else {
  console.log(false);
}