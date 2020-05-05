// total_area.js

/*
Problem
- write a function
- input
  - array of arrays - numbers
- return
  - sum of products of each inner array (number)
Example
let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];
totalArea(rectangles);    // 141

Data Structure
- Array

Algorithm
- declare a `sum` variable and set equal to zero
- iterate through each element of outer array
- find the product of elements of inner array
- add the product to `sum`
- return `sum`

*/

function totalArea(array) {
  return array.reduce((totalArea, rectangle) => {
    return totalArea + rectangle[0] * rectangle[1];
  }, 0);
}

function totalArea2(array) {
  let totalArea = 0;

  array.forEach(rectangle => {
    totalArea += rectangle[0] * rectangle[1];
  });

  return totalArea;
}

function totalArea3(array) {
  return array
    .map(rectangle => rectangle[0] * rectangle[1])
    .reduce((total, single) => total + single);
}

let isSquare = pair => pair[0] === pair[1];

function totalSquareArea(array) {
  return totalArea3(array.filter(isSquare));
}

let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];
console.log(totalArea(rectangles) === 141);
console.log(totalArea2(rectangles) === 141);
console.log(totalArea3(rectangles) === 141);
console.log(totalSquareArea(rectangles) === 121);
