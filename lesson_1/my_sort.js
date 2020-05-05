let defaultCompare = (val1, val2) => {
  return String(val1).codePointAt() > String(val2).codePointAt() ? 1 : 0;
};

function mySort(array, compare) {
  /*
    - iterate through the array until the penultimate element
    - compare the current element and the next one
    - if the compare function returns a positive value
      - switch their positions
      - set `sorted` to false
    - loop until sorted is true
    - return array
  */
  if (!compare) {
    compare = defaultCompare;
  }

  let sorted = false;

  while (!sorted) {
    sorted = true;

    for (let index = 0; index < array.length - 1; index += 1) {
      if (compare(array[index], array[index + 1]) > 0) {
        [ array[index], array[index + 1] ] = [ array[index + 1], array[index] ];
        sorted = false;
      }
    }
  }

  return array;
}

let numCompare = (num1, num2) => {
  return num1 > num2 ? 1 : 0;
};
/*
let nums = [1, 3, 2, 389, 3, 8];

console.log(mySort(nums, numCompare));
console.log(mySort(nums));
*/

/*
let scores = [5, 88, 50, 9, 60, 99, 12, 23];
console.log(mySort(scores, numCompare));
console.log(mySort(scores));
*/

let studentGrades = [
  { name: 'StudentA', grade: 90.1 },
  { name: 'StudentB', grade: 92 },
  { name: 'StudentC', grade: 91.8 },
  { name: 'StudentD', grade: 95.23 },
  { name: 'StudentE', grade: 91.81 },
];

let compareGrades = (student1, student2) => {
  return student1.grade < student2.grade ? 1 : 0;
};

console.log(mySort(studentGrades, compareGrades));
