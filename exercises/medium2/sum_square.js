// sum_square.js

function squareSumOneToN(num) {
  let counter = 1;
  let sum = 0;

  while (counter <= num) {
    sum += counter;
    counter += 1;
  }

  return sum ** 2;
}

function sumSquaresOneToN(num) {
  let counter = 1;
  let sum = 0;

  while (counter <= num) {
    sum += counter ** 2;
    counter += 1;
  }

  return sum;
}

function sumSquareDifference(num) {
  if (num < 1 || !Number.isInteger(num)) return undefined;

  return squareSumOneToN(num) - sumSquaresOneToN(num);
}

console.log(sumSquareDifference(3) === 22);   // (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10) === 2640);
console.log(sumSquareDifference(1) === 0);
console.log(sumSquareDifference(100) === 25164150);
console.log(sumSquareDifference(-5) === undefined);
console.log(sumSquareDifference(1.5) === undefined);
