// word_to_digit.js

function wordToDigit(string) {
  let NUM_WORDS = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  return string.replace(/[A-Za-z]+/g, word => {
    let lowerWord = word.toLowerCase();
    if (NUM_WORDS.includes(lowerWord)) {
      return NUM_WORDS.indexOf(lowerWord);
    } else {
      return word;
    }
  });
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.')
  === "Please call me at 5 5 5 1 2 3 4. Thanks.");

console.log(wordToDigit("four-one-two Gone pfour threee") 
  === "4-1-2 Gone pfour threee");
