// caesar_cipher.js

function shiftLetterUp(letter, positions) {
  let upperCharCode;
  let lowerCharCode;

  if (letter >= 'a' && letter <= 'z') {
    upperCharCode = 'z'.charCodeAt();
    lowerCharCode = 'a'.charCodeAt();
  } else {
    upperCharCode = 'Z'.charCodeAt();
    lowerCharCode = 'A'.charCodeAt();
  }
  
  const ALPHABET_LENGTH = upperCharCode - lowerCharCode + 1;

  let outputCharCode = letter.charCodeAt() + (positions % ALPHABET_LENGTH);

  if (outputCharCode > upperCharCode) {
    outputCharCode = lowerCharCode + (outputCharCode - upperCharCode - 1);
  } else if (outputCharCode < lowerCharCode) {
    outputCharCode = upperCharCode - (lowerCharCode - outputCharCode - 1);
  }
  
  return String.fromCharCode(outputCharCode);
}

function caesarEncrypt(text, key) {
  return text
    .split("")
    .map(character => {
      if (/[A-Za-z]/.test(character)) {
        return shiftLetterUp(character, key);
      } else {
        return character;
      }
    })
    .join("");
}


// simple shift
console.log(caesarEncrypt('A', 0) === "A");
console.log(caesarEncrypt('A', 3) === "D");

// wrap around
console.log(caesarEncrypt('y', 5) === "d");
console.log(caesarEncrypt('a', 47) === "v");

// all letters
console.log(caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25) ===
  "ZABCDEFGHIJKLMNOPQRSTUVWXY");

console.log(caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5) ===
  "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!");

// many non-letters
console.log(caesarEncrypt("There are, as you can see, many punctuations. " + 
  "Right?; Wrong?", 2) === "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?");

// empty string input 
console.log(caesarEncrypt("", 120) === "");

// negative second parameter
console.log(caesarEncrypt("FOO bar", -1) === "ENN azq");
console.log(caesarEncrypt("aaAA", -26) === "aaAA");
console.log(caesarEncrypt("aaAA", -27) === "zzZZ");
