/**
 * @jest-environment jsdom
 */

const { onReverseButtonClick } = require("../index.js");
const { getByRole, getByTestId, fireEvent } = require("@testing-library/dom");

const fs = require("fs");
const path = require("path");

const html = fs.readFileSync(path.resolve(__dirname, "../index.html"), "utf8");

/**
 * Resets the document to its initial state before each test.
 */
function resetDOM() {
  // set the body to the same as original html
  document.documentElement.innerHTML = html.toString();
  // add the button click event handler
  document
    .querySelector("button")
    .addEventListener("click", onReverseButtonClick);
}

// add test suite for reverse button
describe("Reverse Button", () => {
  beforeEach(resetDOM);

  it("reverses the string found in the input", () => {
    // ARIA roles:
    // https://www.w3.org/TR/html-aria/#docconformance

    // Why we use getByRole:
    //  https://testing-library.com/docs/queries/about/#priority

    // get our input element
    const input = getByRole(document, "textbox");
    // get our output element
    const output = getByTestId(document, "reverse-string-output");
    // get our button element
    const button = getByRole(document, "button");

    // manually set the input value
    input.value = "hello";

    // fire the click event on our button
    fireEvent.click(button);

    // expect the output to contain the input string reversed
    expect(output.textContent).toEqual("olleh");
  });

  it("reverses really long string", () => {
    // ARIA roles:
    // https://www.w3.org/TR/html-aria/#docconformance

    // Why we use getByRole:
    //  https://testing-library.com/docs/queries/about/#priority

    // get our input element
    const input = getByRole(document, "textbox");
    // get our output element
    const output = getByTestId(document, "reverse-string-output");
    // get our button element
    const button = getByRole(document, "button");

    // manually set the input value
    input.value = "lorem ipsum lorem ipsum";

    // fire the click event on our button
    fireEvent.click(button);

    // expect the output to contain the input string reversed
    expect(output.textContent).toEqual("muspi merol muspi merol");
  });
});
