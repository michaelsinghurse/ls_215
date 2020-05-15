// merge_sort.js

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

function mergeSort(array) {
  if (array.length === 1) return array;
  
  let midpoint = Math.ceil(array.length / 2);
  let left = array.slice(0, midpoint);
  let right = array.slice(midpoint);

  left = mergeSort(left);
  right = mergeSort(right);

  return merge(left, right);
}

console.log(mergeSort([9, 5, 7, 1]));           // [1, 5, 7, 9]
console.log(mergeSort([5, 3]));                 // [3, 5]
console.log(mergeSort([6, 2, 7, 1, 4]));        // [1, 2, 4, 6, 7]

console.log(mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim',
'Bonnie']));
// ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

console.log(mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18,
46]));
// [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]





