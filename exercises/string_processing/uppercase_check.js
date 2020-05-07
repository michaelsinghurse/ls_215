// uppercase_check.js

function isUppercase1(string) {
  return string
    .split("")
    .every(character => character.toUpperCase() === character);
}

function isUppercase(string) {
  return string === string.toUpperCase();
}

console.log(isUppercase('t') === false);
console.log(isUppercase('T') === true);
console.log(isUppercase('Four Score') === false);
console.log(isUppercase('FOUR SCORE') === true);
console.log(isUppercase('4SCORE!') === true);
console.log(isUppercase('') === true);