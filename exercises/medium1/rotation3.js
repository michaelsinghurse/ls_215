// rotation3.js

function rotateArray(arr) {
  if (!Array.isArray(arr)) return undefined;
  if (arr.length === 0) return [];

  return arr.slice(1).concat(arr[0]);
}

function rotateRightmostDigits(number, digits) {
  let left = String(number).slice(0, -1 * digits);
  let right = String(number).slice(-1 * digits);

  let rotatedRight = rotateArray(right.split("")).join("");

  return Number(left + rotatedRight);
}

function maxRotation(number) {
  for (let digits = String(number).length; digits >= 2; digits -= 1) {
    number = rotateRightmostDigits(number, digits);
  }

  return number;
}

console.log(maxRotation(100) === 1);
console.log(maxRotation(735291) === 321579);
console.log(maxRotation(3) === 3);
console.log(maxRotation(35) === 53);
console.log(maxRotation(105) === 15); // -- the leading zero gets dropped
console.log(maxRotation(8703529146) === 7321609845);
