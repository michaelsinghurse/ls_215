// grocery_list.js

function buyFruit(array) {
  return array.reduce((list, subArray) => {
    let count = 1;
    while (count <= subArray[1]) {
      list.push(subArray[0]);
      count += 1;
    }
    return list;
  }, []);
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]

