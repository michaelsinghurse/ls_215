// is_block_word.js

function isBlockWord(string) {
  if (
    typeof string !== "string" || 
    string.length === 0 ||
    string.match(/[^A-Z]/gi)
  ) {
    return undefined;
  }

  let blocks = ["BO", "XK", "DQ", "CP", "NA", "GT", "RE", "FS", "JW", "HU",
    "VI", "LY", "ZM"];

  string = string.toUpperCase();
  for (let index = 0; index < string.length; index += 1) {
    let character = string[index];
    let blockIndex = blocks.findIndex(block => block.indexOf(character) > -1);
    if (blockIndex === -1) return false;
    blocks.splice(blockIndex, 1);
  }

  return true;
}

console.log(isBlockWord('BATCH') === true);
console.log(isBlockWord('BUTCH') === false);
console.log(isBlockWord('jest') === true);
console.log(isBlockWord("JeSt") === true);

// invalid input
console.log(isBlockWord("") === undefined);
console.log(isBlockWord(10) === undefined);
console.log(isBlockWord([ "word" ]) === undefined);
console.log(isBlockWord({ "val": "word" }) === undefined);
console.log(isBlockWord("two words") === undefined);
console.log(isBlockWord("number1") === undefined);
