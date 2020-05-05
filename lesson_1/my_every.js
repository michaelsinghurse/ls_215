function myEvery(array, func) {
  for (let index = 0; index < array.length; index += 1) {
    if (!func(array[index], index, array)) return false;
  }

  return true;
}
/*
let strings = ['hi', 'there', 'world!'];
console.log(myEvery(strings, element => element.length > 2));

let isAString = value => typeof value === 'string';
console.log(myEvery(['a', 'a234', '1abc'], isAString));
*/

function isANumber(value) {
  return typeof value === 'number' && !Number.isNaN(value);
}

function areAllNumbers(array) {
  return myEvery(array, isANumber); 
}

console.log(areAllNumbers([1, 2, 3, 4, 5]));
console.log(areAllNumbers(['1', '2', '3', '4', '5']));
console.log(areAllNumbers([1, 2, NaN]));
