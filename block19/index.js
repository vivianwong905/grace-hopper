// FizzBuzz
// Implement a function that when given a number
// An array of a consecutive list of numbers up to that number, starting at 1
// But makes the following replacements:
// - if the number is divisible by 3: "Fizz"
// - if the number if divisible by 5: "Buzz"
// - if the number is divisible by both 3 and 5: "FizzBuzz"
function fizzBuzz(number) {
  const result = [];
  for (let i = 1; i <= number; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push("FizzBuzz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(i);
    }
  }
  return result;
}

// Remove Spaces function
// Implement a function that removes all spaces from a string
function removeSpaces(str) {
  // Several Approaches:
  // loop through the string - create a new string without spaces
  // split into an array using " ", join with ""
  // replaceAll spaces with empty strings
  // use regular expression?
  // OUR TEST DOES NOT CARE WHICH APPROACH WE PICKED
  // return str.replaceAll(" ", "");
  return str.split(" ").join("");
}

// Title Case
// Write a function that transforms a string into title case
function convertToTitleCase(str) {
  if (str === "") {
    return "";
  }
  // split the string into an array, using " "
  // iterate through each word
  // make the first letter of each word uppercase
  const words = str.split(" ");
  const titleWords = words.map((word) => {
    // first letter + slice from 1 until end of string
    return word[0].toUpperCase() + word.slice(1);
  });
  return titleWords.join(" ");

  // This would also pass the test
  // return str
  //     .split(" ")
  //     .map(word => word[0].toUpperCase() + word.slice(1))
  //     .join(" ");
}

// Book Sort & Filter
// Given an array of book objects containing a title, author and price
// create a function that:
// - filters by max price
// - sorts by title, price or author
// - without mutating the original array
function bookSortAndFilter(books, sortBy, maxPrice) {
  // Update this (and relevant test) to throw an error
  if (!Array.isArray(books)) {
    throw new Error("Must provide an array");
  }

  // if any of the books
  // do not have title, author or price
  // Update this (and relevant test) to throw an error
  if (!books.every((book) => book.title && book.author && book.price)) {
    throw new Error("Invalid book objects provided");
  }

  // does the same thing as above - returns error string if
  // any book is missing any of the fields
  // for (let book of books) {
  //     if (!book.title || !book.author || !book.price) {
  //         return "Invalid book objects provided"
  //     }
  // }

  // allow user to specify sort by title OR price OR author
  let results = books;

  //     compareFn(a, b) return value	sort order
  // > 0	sort a after b, e.g. [b, a]
  // < 0	sort a before b, e.g. [a, b]
  // === 0	keep original order of a and b
  if (sortBy) {
    results = books
      .slice() // make a copy so that we don't mutate books
      .sort((bookA, bookB) => {
        // if (sortBy === "title") {
        //     return bookA.title.localeCompare(bookB.title)
        // }
        // if (sortBy === "price") {
        //     // ex. bookA = 10, bookB = 25 = -15 => a should go before b
        //     // ex. bookA = 30, bookB = 25 = 5 => a should go after b
        //     return bookA.price - bookB.price;
        // }
        // if (sortBy === "author") {
        //     return bookA.author.localeCompare(bookB.author)
        // }
        // throw new Error("Invalid sortBy argument supplied");

        switch (sortBy) {
          case "title":
            return bookA.title.localeCompare(bookB.title);
          case "price":
            // ex. bookA = 10, bookB = 25 = -15 => a should go before b
            // ex. bookA = 30, bookB = 25 = 5 => a should go after b
            return bookA.price - bookB.price;
          case "author":
            return bookA.author.localeCompare(bookB.author);
          default:
            throw new Error("Invalid sortBy argument supplied");
        }
      });
  }

  return maxPrice !== undefined
    ? results.filter((book) => book.price <= maxPrice)
    : results;
}

module.exports = {
  fizzBuzz,
  removeSpaces,
  convertToTitleCase,
  bookSortAndFilter,
};
