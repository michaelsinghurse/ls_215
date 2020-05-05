// sum_of_sums.js

function sumOfSums(array) {
  return array.reduce((sum, _, index, array) => {
    return sum + array.slice(0, index + 1).reduce((sum, val) => sum + val);
  }, 0);
}

console.log(sumOfSums([3, 5, 2]) === 21);
console.log(sumOfSums([1, 5, 7, 3]) === 36);
console.log(sumOfSums([4]) === 4);
console.log(sumOfSums([1, 2, 3, 4, 5]) === 35);
