// luhn_checksum.js

const INVALID_INPUT = undefined;

function checkSum(string) {
  let sum = 0;

  for (let index = 0; index < string.length; index += 1) {
    let digit = Number(string[index]);
    let rightIndex = string.length - 1 - index;

    if (rightIndex % 2 === 1) {
      digit *= 2;

      if (digit > 9) {
        digit -= 9;
      }
    }

    sum += digit;
  }

  return sum;
}

function isValidLuhnNumber(string) {
  if (typeof string !== "string") return INVALID_INPUT;

  let sum = checkSum(string.replace(/\D/g, ""));
  return sum % 10 === 0;
}

function makeLuhnNumber(string) {
  if (typeof string !== "string") return INVALID_INPUT;

  for (let digit = 0; digit <= 9; digit += 1) {
    let test = string + String(digit);
    
    if (isValidLuhnNumber(test)) {
      return test;
    }
  }

  return null;
}

console.log(isValidLuhnNumber("1111") === false);
console.log(isValidLuhnNumber("8763") === true);
console.log(isValidLuhnNumber("2323 2005 7766 3554") === true);
// ignore non-digits
console.log(isValidLuhnNumber("1?1-1a1") === false);
console.log(isValidLuhnNumber("aaa  8 akdi 7 63") === true);
// invalid input
console.log(isValidLuhnNumber(["1111"]) === INVALID_INPUT);
console.log(isValidLuhnNumber(1111) === INVALID_INPUT);
console.log(isValidLuhnNumber({ num: "1111" }) === INVALID_INPUT);

// make Luhn Number
console.log(makeLuhnNumber("876") === "8763");
console.log(makeLuhnNumber("2323 2005 7766 355") === "2323 2005 7766 3554");
