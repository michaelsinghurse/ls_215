// phone_numbers.js

function cleanNumber(string) {
  const DEFAULT_NUMBER = "0".repeat(10);

  if (typeof string !== "string") return DEFAULT_NUMBER;

  let numString = string.replace(/\D/g, "");

  if (numString.length === 10) return numString;
  if (numString.length === 11 && numString[0] === "1") return numString.slice(1);
  return DEFAULT_NUMBER;
}

console.log(cleanNumber("0123456789") === "0123456789");
console.log(cleanNumber("10123456789") === "0123456789");
console.log(cleanNumber("1-012-345-6789") === "0123456789");
console.log(cleanNumber("1 (012) 345-6789") === "0123456789"); 
console.log(cleanNumber("012.345.6789") === "0123456789");
console.log(cleanNumber("(012) 345-6789") === "0123456789");
console.log(cleanNumber(0123456789) === "0000000000"); 
console.log(cleanNumber("345-6789") === "0000000000"); 
console.log(cleanNumber("20123456789") === "0000000000");
console.log(cleanNumber("") === "0000000000");
console.log(cleanNumber() === "0000000000");
console.log(cleanNumber(["0123456789"]) === "0000000000");
console.log(cleanNumber(["----....????"]) === "0000000000");
