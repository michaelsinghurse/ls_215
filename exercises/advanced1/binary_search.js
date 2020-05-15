// binary_search.js

function binarySearch(array, searchItem) {
  if (array.length === 0) return -1;

  let midIndex = Math.floor(array.length / 2);
  let midItem = array[midIndex];

  if (searchItem === midItem) {
    
    return midIndex;

  } else if (array.length === 1) {

    return -1;

  } else if (searchItem > midItem) {

    let right = array.slice(midIndex + 1);
    let searchVal = binarySearch(right, searchItem);
    if (searchVal === -1) return -1;
    return midIndex + 1 + searchVal;

  } else {

    let left = array.slice(0, midIndex);
    let searchVal = binarySearch(left, searchItem);
    if (searchVal === -1) return -1;
    return 0 + searchVal;

  }
}

var yellowPages = ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot', 
'Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper'];
console.log(binarySearch(yellowPages, 'Pizzeria') === 7);
console.log(binarySearch(yellowPages, 'Apple Store') === 0);

console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77) === -1);
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89) === 7);
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5) === 1);

console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue',
'Tyler'], 'Peter') === -1);
console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue',
'Tyler'], 'Tyler') === 6);


