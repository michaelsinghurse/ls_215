// merge_sorted_lists.js

function merge(array1, array2) {
  let output = [];
  let index1 = 0; 
  let index2 = 0; 

  while (index1 < array1.length || index2 < array2.length) {
    let value1 = array1[index1]; 
    let value2 = array2[index2]; 

    if (value2 === undefined || value1 < value2) {
      output.push(value1);
      index1 += 1;
    } else if (value1 === undefined || value2 < value1) {
      output.push(value2);
      index2 += 1;
    } else {
      output.push(value1, value2);
      index1 += 1;
      index2 += 1;
    }
  }

  return output;
}

console.log(merge([-51, 5, 9], [2, 6, 8]));      // [1, 2, 5, 6, 8, 9]
console.log(merge([0, 1, 3], [2, 2]));         // [1, 1, 2, 2, 3]
console.log(merge([], [1, 4, 5]));             // [1, 4, 5]
console.log(merge([1, 4, 5], []));             // [1, 4, 5]
console.log(merge(["Michael", "Nathanael"], ["Bernadette", "Ursula", "Zofia"]));

