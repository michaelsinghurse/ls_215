// palindromic_substrings.js

function substringsAtStart(string) {
  return string
    .split("")
    .map((_, index) => string.slice(0, index + 1));
}

function substrings(string) {
  return string
    .split("")
    .reduce((result, _, index) => {
      return result.concat(substringsAtStart(string.slice(index)));
    }, []);
}

function isPalindrome1(string) {
  if (string.length < 2) return false;

  for (let index = 0; index < (string.length / 2); index += 1) {
    if (string[index] !== string[string.length - 1 - index]) {
      return false;
    }
  }

  return true;
}

function isPalindrome(string) {
  return string.length > 1 && string === string.split("").reverse().join("");
}

function palindromes(string) {
  return substrings(string).filter(sub => isPalindrome(sub));
}

console.log(isPalindrome("") === false);
console.log(isPalindrome("a") === false);
console.log(isPalindrome("abba") === true);
console.log(isPalindrome("abcba") === true);
console.log(isPalindrome("abcdba") === false);

console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
//[ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//  "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//  "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns
//[ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]
