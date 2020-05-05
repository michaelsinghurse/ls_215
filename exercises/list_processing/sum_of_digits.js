// sum_of_digits.js

let sum = num => {
  return num
    .toString()
    .split("")
    .map(strDigit => Number(strDigit))
    .reduce((sum, val) => sum + val);
};

console.log(sum(23) === 5);
console.log(sum(496) === 19);
console.log(sum(123456789) === 45);
