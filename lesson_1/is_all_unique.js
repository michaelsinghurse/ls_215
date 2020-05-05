// is_all_unique.js

function isAllUnique(chars) {
  let obj = {};
  chars = chars.toLowerCase();

  for (let index = 0; index < chars.length; index += 1) {
    let val = chars[index];
    if (val === " ") continue;
    if (obj[val]) return false;
    obj[val] = 1;
  }

  return true;
}

console.log(
  isAllUnique('The quick brown fox jumped over a lazy dog') === false);
console.log(isAllUnique('123,456,789') === false);
console.log(isAllUnique('The big apple') === false);
console.log(isAllUnique('The big apPlE') === false);
console.log(isAllUnique('!@#$%^&*()') === true);
console.log(isAllUnique('abcdefghijklmnopqrstuvwxyz') === true);
console.log(isAllUnique("Nathanael") === false);
