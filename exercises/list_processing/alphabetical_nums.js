// alphabetical_nums.js

const WORDS = [
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
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
];

function numberToWord(num) {
  return WORDS[num];
}

function wordToNumber(word) {
  return WORDS.findIndex(val => val === word);
}

function numberWordCompare(num1, num2) {
  if (WORDS[num1] > WORDS[num2]) {
    return 1;
  } else if (WORDS[num1] < WORDS[num2]) {
    return -1;
  } else {
    return 0;
  }
}

function alphabeticNumberSort(nums) {
  return nums.slice().sort(numberWordCompare);
}

console.log(alphabeticNumberSort(
   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));

