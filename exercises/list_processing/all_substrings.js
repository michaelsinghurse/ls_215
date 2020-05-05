// all_substrings.js

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

console.log(substrings('abcde'));
