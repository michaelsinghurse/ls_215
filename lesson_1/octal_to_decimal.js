// octal_to_decimal.js

/*
Problem
- write a function `octalToDecimal`
- input
  - string
- output 
  - number
- rules
  - the input string is an octal number
  - the function should convert it to a decimal and return the number
  - do not use any built-in methods for the conversion
  - validate input? No

Examples
octalToDecimal('1');           // 1
octalToDecimal('10');          // 8
octalToDecimal('130');         // 88
octalToDecimal('17');          // 15
octalToDecimal('2047');        // 1063
octalToDecimal('011');         // 9

Data Structure
- none

Algorithm
- declare `decimal` and set equal to 0
- iterate from right to left through the string
  - take digit at that position, convert to a number, and multiply by 8 to power
    of that digits position
  - add this result to decimal
- return `decimal` 
*/

function octalToDecimal0(octalString) {
  let decimal = 0;

  for (let index = 0; index < octalString.length; index += 1) {
    let digit = Number(octalString[octalString.length - 1 - index]);
    decimal += (digit * Math.pow(8, index));
  }

  return decimal;
}

function octalToDecimal1(octalString) {
  return octalString
    .split("")
    .reduce((accum, val, index, array) => {
      accum += Number(val) * Math.pow(8, array.length - 1 - index); 
      return accum;
    }, 0);
}

function octalToDecimal(octalString) {
  return octalString
    .split("")
    .map((val, index, array) => {
      return Number(val) * Math.pow(8, array.length - 1 - index);
    })
    .reduce((accum, val) => accum + val);
}

console.log(octalToDecimal('1') === 1);
console.log(octalToDecimal('10') === 8);
console.log(octalToDecimal('130') === 88);
console.log(octalToDecimal('17') === 15);
console.log(octalToDecimal('2047') === 1063);
console.log(octalToDecimal('011') === 9);
