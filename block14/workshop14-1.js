//vowel versus consonant
//create a few diff variables, one for vowels and consonant
// i might have to do the vowels one by one
// then all other letters goes to consonant
const vowels = [];
const consonant1 = [];
const inputWord = ["hello"];
for (i = 0; i < inputWord.length; i++) {
  console.log("line23", inputWord[i]);
  if (inputWord[i] == "a") {
    vowels.push(inputWord[i]);
  } else if (inputWord[i] === "e") {
    vowels.push(inputWord[i]);
  } else if (inputWord[i] === "i") {
    vowels.push(inputWord[i]);
  } else if (inputWord[i] === "o") {
    vowels.push(inputWord[i]);
  } else if (inputWord[i] === "u") {
    vowels.push(inputWord[i]);
  } else {
    consonant1.push(inputWord[i]);
  }
}
console.log("vowels", vowels);
console.log("consonant", consonant1);
