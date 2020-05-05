function myReduce(array, func, initial) {
  let accum = (initial === undefined ? array[0] : initial);
  let startIndex = (initial === undefined ? 1 : 0);

  for (let index = startIndex; index < array.length; index += 1) {
    accum = func(accum, array[index], index, array);
  }

  return accum;
}

/*
let smallest = (result, value) => (result <= value ? result : value);
let sum = (result, value) => result + value;

console.log(myReduce([5, 12, 15, 1, 6], smallest));
console.log(myReduce([5, 12, 15, 1, 6], sum));
*/

function longestWord(words) {
  return myReduce(words, (accum, val) => {
    return accum.length >= val.length ? accum : val;
  });
}

console.log(longestWord(['abc', 'launch', 'targets', '']));
