// transpose3x3.js

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

function transpose2(matrix) {
  return matrix.map((_, index, array) => {
    return [ array[0][index], array[1][index], array[2][index] ];
  });
}


let matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

let newMatrix = transpose(matrix);
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]
console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]


let matrix2 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let newMatrix2 = transpose(matrix2);

console.log(matrix2);
console.log(newMatrix2);

