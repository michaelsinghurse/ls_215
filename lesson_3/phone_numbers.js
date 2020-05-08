// phone_numbers.js

/*
Problem
- write a function
- input
  - string
  - validate? Yes
    - anything but a string, return undefined 
- output
  - string
- rules
  - remove all non digits from the string? Yes
  - a good number has 10 digits, or 11 digits if the first number is 1
  - if it is 11 digits and the first digit is 1, remove the first digit
  - if it is a bad number, return a string with 10 zeroes.

Examples
cleanNumber("0123456789") === "0123456789"
cleanNumber("10123456789") === "0123456789"
cleanNumber("1-012-345-6789") === "0123456789"
cleanNumber("1 (012) 345-6789") === "0123456789"
cleanNumber("012.345.6789") === "0123456789"
cleanNumber("(012) 345-6789") === "0123456789"
cleanNumber(0123456789) === "0000000000" 
cleanNumber("345-6789") === "0000000000" 
cleanNumber("20123456789") === "0000000000"
cleanNumber("") === "0000000000"
cleanNumber() === "0000000000"
cleanNumber(["0123456789"]) === "0000000000"

Data Structure
- Array

Algorithm
- if the input is not a string, return bad number string
- split the string into an array at each character
- filter the array for digits
- join the array back into a string
- if the lenght of the string is 10, return it
- if the length of the sting is 11, and the first digit is 1, return 
  it without the leading zero
- return the bad number string
*/

function cleanNumber(string) {
  const DEFAULT_NUMBER = "0000000000";

  if (typeof string !== "string") return DEFAULT_NUMBER;

  let numString = string
    .split("")
    .map(Number)
    .filter(element => !Number.isNaN(element))
    .join("");

  if (numString.length === 10) return numString;
  if (numString.length === 11 && numString[0] === "1") return numString.slice(1);
  return DEFAULT_NUMBER;
}

console.log(cleanNumber("0123456789") === "0123456789");
console.log(cleanNumber("10123456789") === "0123456789");
console.log(cleanNumber("1-012-345-6789") === "0123456789");
console.log(cleanNumber("1 (012) 345-6789") === "0123456789"); 
// BUG: Number(" ") => 0
console.log(cleanNumber("012.345.6789") === "0123456789");
console.log(cleanNumber("(012) 345-6789") === "0123456789");
console.log(cleanNumber(0123456789) === "0000000000"); 
console.log(cleanNumber("345-6789") === "0000000000"); 
console.log(cleanNumber("20123456789") === "0000000000");
console.log(cleanNumber("") === "0000000000");
console.log(cleanNumber() === "0000000000");
console.log(cleanNumber(["0123456789"]) === "0000000000");
