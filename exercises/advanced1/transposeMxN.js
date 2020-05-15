// transposeMxN.js

function transpose(matrix) {
  let result = [];
  for (let _ = 0; _ < matrix[0].length; _ += 1) {
    result.push([]);
  }

  for (let row = 0; row < matrix.length; row += 1) {
    for (let col = 0; col < matrix[0].length; col += 1) {
      result[col][row] = matrix[row][col];
    }
  }

  return result;
}

let arr1 = [[1, 2, 3, 4]];
let arr2 = transpose(arr1);
console.log(arr1);
console.log(arr2);                  // [[1], [2], [3], [4]]

let arr3 = [[1], [2], [3], [4]];
let arr4 = transpose(arr3);
console.log(arr3);
console.log(arr4);                 // [[1, 2, 3, 4]]

let arr5 = [[1]];
let arr6 = transpose(arr5);
console.log(arr5);
console.log(arr6);

let arr7 = [[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]];
let arr8 = transpose(arr7);
console.log(arr7);
console.log(arr8);
// [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]

