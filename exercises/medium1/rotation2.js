// rotation2.js

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

console.log(rotateRightmostDigits(735291, 1) === 735291);
console.log(rotateRightmostDigits(735291, 2) === 735219);
console.log(rotateRightmostDigits(735291, 3) === 735912);
console.log(rotateRightmostDigits(735291, 4) === 732915);
console.log(rotateRightmostDigits(735291, 5) === 752913);
console.log(rotateRightmostDigits(735291, 6) === 352917);
