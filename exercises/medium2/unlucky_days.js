// unlucky_days.js

function fridayThe13ths(year) {
  let result = 0;

  for (let month = 0; month < 12; month += 1) {
    let date = new Date(year, month, 13);
    if (date.getDay() === 5) {
      result += 1;
    }
  }

  return result;
}

console.log(fridayThe13ths(1986) === 1);
console.log(fridayThe13ths(2015) === 3);
console.log(fridayThe13ths(2017) === 2);
console.log(fridayThe13ths(1753));      // ?
console.log(fridayThe13ths(2020));      // ?
console.log(fridayThe13ths(3020));      // ?
