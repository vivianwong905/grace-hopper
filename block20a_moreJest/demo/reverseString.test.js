/**
 * @jest-environment jsdom
 */

// Import reverseString from reverse-string.js and use it in a test:
const { reverseString } = require("../index.js");

describe("reverseString", () => {
  it("should be a function", () => {
    expect(typeof reverseString).toBe("function");
    expect(reverseString).toBeInstanceOf(Function);
  });

  it("throws when non-string is supplied as argument", () => {
    expect(() => reverseString(123)).toThrow("Must supply a string");
  });

  it("returns empty string when given empty string", () => {
    const result = reverseString("");
    expect(result).toBe("");
  });

  it("reverses a single-word string", () => {
    const result = reverseString("meow");
    expect(result).toBe("woem");
  });

  it("reverses a multi-word string", () => {
    const result = reverseString("hello world");
    expect(result).toBe("dlrow olleh");
  });

  it("reverses a string with punctuation", () => {
    const result = reverseString("Hi!!");
    expect(result).toBe("!!iH");
  });
});
