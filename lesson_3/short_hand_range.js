// short_hand_range.js

function getRangeLimit1(prev, next) {
  let prevLeft = prev.slice(0, prev.length - next.length);
  let prevRight = prev.slice(prev.length - next.length);

  if (Number(next) > Number(prevRight)) {
    return prevLeft + next;
  } else {
    return String(Number(prevLeft) + 1) + next; 
  }
}

function getRangeLimit(prev, next) {
  let nextLength = next.length;
  let counter = Number(prev) + 1;
  while (true) {
    if (String(counter).slice(-1 * nextLength) === next) {
      return String(counter);
    }
    counter += 1;
  }
}

function appendRange(array, start, end) {
  let num = start;
  while (num <= end) {
    array.push(num);
    num += 1;
  }
}

function addRange(array, range) {
  let prevMax = array[array.length - 1] || 0;
  let rangeArray = range.split(/-|\.\.|:/g);

  let newRangeStart = getRangeLimit(String(prevMax), rangeArray[0]);
  let newRangeEnd = newRangeStart;
  for (let index = 1; index < rangeArray.length; index += 1) {
    newRangeEnd = getRangeLimit(newRangeEnd, rangeArray[index]); 
  }

  appendRange(array, Number(newRangeStart), Number(newRangeEnd));
}

function shortHand(input) {
  let output = [];
  input.split(", ").forEach(range => addRange(output, range));
  return output;
}

console.log(shortHand("1, 3, 7, 2, 4, 1"));   // [1, 3, 7, 12, 14, 21]
console.log(shortHand("1-3, 1-2"));           // [1, 2, 3, 11, 12]
console.log(shortHand("1:3, 1:2"));           // [1, 2, 3, 11, 12]
console.log(shortHand("1..3, 1..2"));         // [1, 2, 3, 11, 12]
console.log(shortHand("104-2"));              // [104, 105, ..., 112]
console.log(shortHand("104-02"));             // [104, 105, ..., 202]
console.log(shortHand("545, 64:11"));         // [545, 564, 565, 566, 611]
console.log(shortHand("1:5:2"));              // [1, 2, 3, 4, ..., 12]

