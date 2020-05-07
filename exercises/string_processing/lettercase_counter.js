// lettercase_counter.js

function letterCaseCount(string) {
  return string.split("").reduce((obj, character) => {
    if (/[a-z]/.test(character)) {
      obj.lowercase += 1;
    } else if (/[A-Z]/.test(character)) {
      obj.uppercase += 1;
    } else {
      obj.neither += 1;
    }
    return obj;
  }, { lowercase: 0, uppercase: 0, neither: 0 });
}

console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }
