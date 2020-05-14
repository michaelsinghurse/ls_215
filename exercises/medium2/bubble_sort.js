// bubble_sort.js

// function sorts strings in ASCIIbetical order.
function bubbleSort(array) {
  let sorted = false;
  
  while (!sorted) {
    sorted = true;

    for (let index = 0; index < array.length - 1; index += 1) {
      if (array[index] > array[index + 1]) {
        [ array[index], array[index + 1] ] = [ array[index + 1], array[index] ]; 
        sorted = false;
      }
    }
  }
}


let array = [5, 3];
console.log(array);
bubbleSort(array);
console.log(array);    // [3, 5]

array = [6, 2, 7, 1, 4];
console.log(array);
bubbleSort(array);
console.log(array);    // [1, 2, 4, 6, 7]

array = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
console.log(array);
bubbleSort(array);
console.log(array);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

