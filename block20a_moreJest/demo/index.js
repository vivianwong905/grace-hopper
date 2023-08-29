// write a function that reverses a string
function reverseString(str) {
  if (typeof str !== "string") {
    throw new Error("Must supply a string");
  }
  // ways to reverse a string:
  // use a loop:
  // create empty string
  let result = "";
  // loop from last to first index
  for (let i = str.length - 1; i >= 0; i--) {
    // add every character to the empty string
    result += str[i];
  }
  return result;
  // return str.split("").reverse().join("");
}

// reverse the input string whenever the button is pressed
function onReverseButtonClick() {
  const input = document.querySelector("input");
  const output = document.querySelector("output");
  output.textContent = reverseString(input.value);
}

// Since we're testing in both the browser and Node.js, we need to check
// whether we're in Node.js before exporting anything.
if (typeof module !== "undefined") {
  module.exports = {
    reverseString,
    onReverseButtonClick,
  };
} else {
  // get the button from the DOM
  const button = document.querySelector("button");

  // addEventListener to button
  button.addEventListener("click", onReverseButtonClick);
}
