// matching_parens.js

function isBalanced2(string) {
  let open = 0;

  for (let index = 0; index < string.length; index += 1) {
    let character = string[index];
    if (character === "(") {
      open += 1;
    } else if (character === ")") {
      open -= 1;
    }
    if (open < 0) return false;
  }

  return open === 0;
}

function isBalanced(string) {
  let open = 0;
  return string.split("").every((character, index) => {
    if (character === "(") {
      open += 1;
    } else if (character === ")") {
      open -= 1;
    }
    
    return index < string.length - 1 ? open >= 0 : open === 0;
  });
}

console.log(isBalanced('What (is) this?') === true);
console.log(isBalanced('What is) this?') === false);
console.log(isBalanced('What (is this?') === false);
console.log(isBalanced('((What) (is this))?') === true);
console.log(isBalanced('((What)) (is this))?') === false);
console.log(isBalanced('Hey!') === true);
console.log(isBalanced(')Hey!(') === false);
console.log(isBalanced('What ((is))) up(') === false);
