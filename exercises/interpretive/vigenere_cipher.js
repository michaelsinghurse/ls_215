// vigenere_cipher.js

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

function distanceFromUpperOrLowerCaseA(letter) {
  let base; 
  if (/[A-Z]/.test(letter)) {
    base = "A".charCodeAt();
  } else {
    base = "a".charCodeAt();
  }

  return letter.charCodeAt() - base;
}

function vigenere(text, key) {
  let output = "";
  let keyIndex = 0;

  text.split("").forEach(character => { 
    if (/[A-Z]/i.test(character)) {
      let shift = distanceFromUpperOrLowerCaseA(key[keyIndex]);
      character = caesarEncrypt(character, shift);

      keyIndex += 1;
      if (keyIndex === key.length) {
        keyIndex = 0;
      }
    }
    output += character;
  });

  return output;
}

console.log(vigenere("Pineapples don't go on pizzas!", "meat") ===
  "Bmnxmtpeqw dhz'x gh ar pbldal!");

console.log(vigenere("Hello", "a") === "Hello");
console.log(vigenere("Hello", "b") === "Ifmmp");
console.log(vigenere("Hello", "ab") === "Hflmo");
console.log(vigenere("Hel.lo", "ab") === "Hfl.mo");
