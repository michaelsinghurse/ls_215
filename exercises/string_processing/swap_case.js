// swap_case.js

function swapCase(string) {
  return string
    .split("")
    .map(character => {
      if (/[a-z]/.test(character)) {
        character = character.toUpperCase();
      } else if (/[A-Z]/.test(character)) {
        character = character.toLowerCase();
      }
      return character;
    })
    .join("");
}

console.log(swapCase('CamelCase') === "cAMELcASE");
console.log(swapCase('Tonight on XYZ-TV') === "tONIGHT ON xyz-tv");
