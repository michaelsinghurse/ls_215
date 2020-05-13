// know_my_abcs.js

function isBlockWord(word) {
  if (
    typeof word !== "string" ||
    word.length === 0 ||
    /[^A-Z]/gi.test(word)
  ) return false;

  let blocks = {
    BO: false,
    XK: false,
    DQ: false,
    CP: false,
    NA: false,
    GT: false,
    RE: false,
    FS: false,
    JW: false,
    HU: false,
    VI: false,
    LY: false,
    ZM: false,
  };
  
  for (let index = 0; index < word.length; index += 1) {
    let character = word[index].toUpperCase();
    let key = Object.keys(blocks).find(block => block.indexOf(character) > -1);
    if (blocks[key]) return false;
    blocks[key] = true;
  }

  return true;
}

console.log(isBlockWord("BATCH") === true);
console.log(isBlockWord("BUTCH") === false);
console.log(isBlockWord("jest") === true);

// case insensitive
console.log(isBlockWord("BaTcH") === true);
console.log(isBlockWord("aA") === false);

// returns false if input contains invalid characters
console.log(isBlockWord("batch ") === false);
console.log(isBlockWord("") === false);
