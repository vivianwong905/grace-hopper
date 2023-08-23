const {
  fizzBuzz,
  removeSpaces,
  convertToTitleCase,
  bookSortAndFilter,
} = require("../");

describe("fizzBuzz", function () {
  it("is a function", () => {
    expect(typeof fizzBuzz).toBe("function");
  });

  it("returns an array", function () {
    const result = fizzBuzz();
    // two ways to test if it is an array
    expect(result).toBeInstanceOf(Array);
  });

  it("returns the correct result when given 2", () => {
    const result = fizzBuzz(2);
    // expecting [1, 2]
    expect(result[0]).toBe(1);
    expect(result[1]).toBe(2);

    // REMEMBER:
    // result !== [1, 2]
    // result != [1, 2]
    // two arrays never equal each other
    // the same array equals itself
    expect(result).toEqual([1, 2]);
  });

  it('replaces numbers divisible by 3 with "Fizz"', () => {
    const result = fizzBuzz(4);
    expect(result).toEqual([1, 2, "Fizz", 4]);
  });

  it('replaces numbers divisble by 5 with "Buzz"', () => {
    const result = fizzBuzz(6);
    expect(result).toEqual([1, 2, "Fizz", 4, "Buzz", "Fizz"]);
  });

  it('replaces numbers divisible by both 3 and 5 with "FizzBuzz"', () => {
    const result = fizzBuzz(16);
    expect(result).toEqual([
      1,
      2,
      "Fizz", // instead of 3
      4,
      "Buzz", // instead of 5
      "Fizz", // instead of 6
      7,
      8,
      "Fizz", // instead of 9
      "Buzz", // instead of 10
      11,
      "Fizz", // instead of 12
      13,
      14,
      "FizzBuzz", // instead of 15
      16,
    ]);
  });
});

// Remove Spaces function
// Implement a function that removes all spaces from a string

describe("removeSpaces", () => {
  it("is a function", () => {
    expect(typeof removeSpaces).toBe("function");
  });

  it("returns a string", () => {
    const result = removeSpaces("");
    expect(typeof result).toBe("string");
  });

  it("does not change string without spaces", () => {
    const result = removeSpaces("stringwithoutspaces");
    expect(result).toBe("stringwithoutspaces");
  });

  it("removes spaces from a string with spaces", () => {
    const result = removeSpaces("string with several spaces");
    expect(result).toBe("stringwithseveralspaces");
  });

  it("works with strings with multiple spaces in a row", () => {
    const result = removeSpaces("   i have  a lot   of spaces");
    expect(result).toBe("ihavealotofspaces");
  });
});

// Title Case
// Write a function that transforms a string into title case
describe("convertToTitleCase", () => {
  it("is a function", () => {
    expect(typeof convertToTitleCase).toBe("function");
  });

  it("returns a string", () => {
    const result = convertToTitleCase("title");
    expect(typeof result).toBe("string");
  });

  it("converts lowercase string to title case", () => {
    const result = convertToTitleCase("simple title");
    expect(result).toBe("Simple Title");
  });

  it("works with single word titles", () => {
    const result = convertToTitleCase("title");
    expect(result).toBe("Title");
  });

  it("handles empty string", () => {
    const result = convertToTitleCase("");
    expect(result).toBe("");
  });
});

// Book Sort & Filter
// Given an array of book objects containing a title, author and price
// create a function that:
// - filters by max price
// - sorts by title
// - without mutating the original array

const getBooks = () => {
  return [
    { title: "Too Late", author: "Colleen Hoover", price: 25 },
    { title: "Fourth Wing", author: "Rebecca Yarros", price: 10 },
    { title: "The Five-Star Weekend", author: "Elin Hilderbrand", price: 30 },
  ];
};

describe("bookSortAndFilter", () => {
  it("is a function", () => {
    expect(typeof bookSortAndFilter).toBe("function");
  });

  it("returns an array", () => {
    const result = bookSortAndFilter([]);
    expect(result).toBeInstanceOf(Array);
  });

  it("throws an error if non-array is supplied", () => {
    // const result = bookSortAndFilter("not an array");
    // expect(result).toBe("Must provide an array");
    expect(() => {
      bookSortAndFilter("not an array");
    }).toThrow("Must provide an array");
  });

  it("throws an error if improperly formatted object is supplied", () => {
    // const result = bookSortAndFilter([{foo: "bar"}]);
    // expect(result).toBe("Invalid book objects provided");
    expect(() => {
      bookSortAndFilter([{ foo: "bar" }]);
    }).toThrow("Invalid book objects provided");
  });

  it("only includes books below the max price", () => {
    const books = getBooks();
    const result = bookSortAndFilter(books, null, 25);

    expect(result.length).toBe(2);

    expect(result).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          title: "Too Late",
          author: "Colleen Hoover",
          price: 25,
        }),
        expect.objectContaining({
          title: "Fourth Wing",
          author: "Rebecca Yarros",
          price: 10,
        }),
        expect.not.objectContaining({
          title: "The Five-Star Weekend",
          author: "Elin Hilderbrand",
          price: 30,
        }),
      ])
    );
  });

  describe("sort", () => {
    it("sorts by title", () => {
      const books = getBooks();
      const result = bookSortAndFilter(books, "title");

      expect(result[0].title).toBe("Fourth Wing");
      expect(result[1].title).toBe("The Five-Star Weekend");
      expect(result[2].title).toBe("Too Late");
    });

    it("sorts by price", () => {
      const books = getBooks();
      const result = bookSortAndFilter(books, "price");

      expect(result[0].price).toBe(10); // books[1]
      expect(result[1].price).toBe(25); // books[0]
      expect(result[2].price).toBe(30); // books[2]
    });

    it("sort by author", () => {
      const books = getBooks();
      const result = bookSortAndFilter(books, "author");

      expect(result[0].author).toBe("Colleen Hoover"); // books[0]
      expect(result[1].author).toBe("Elin Hilderbrand"); // books[2]
      expect(result[2].author).toBe("Rebecca Yarros"); // books[1]
    });

    it("throws an error if an invalid sortBy is supplied", () => {
      expect(() => {
        const books = getBooks();
        bookSortAndFilter(books, "foo");
      }).toThrow("Invalid sortBy argument supplied");
    });

    it("does not sort if no sortBy is supplied", () => {
      const books = getBooks();
      const result = bookSortAndFilter(books);

      expect(result[0]).toBe(books[0]);
      expect(result[1]).toBe(books[1]);
      expect(result[2]).toBe(books[2]);
    });

    it("sort by title does not mutate the original array", () => {
      const books = getBooks();

      bookSortAndFilter(books, "title");

      expect(books[0].title).toBe("Too Late");
      expect(books[1].title).toBe("Fourth Wing");
      expect(books[2].title).toBe("The Five-Star Weekend");
    });
  });
});
