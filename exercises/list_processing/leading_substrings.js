// leading_substrings.js

function substringsAtStart(string) {
  return string
    .split("")
    .map((_, index) => string.slice(0, index + 1));
}

console.log(substringsAtStart('abc'));      // ["a", "ab", "abc"]
console.log(substringsAtStart('a'));        // ["a"]
console.log(substringsAtStart('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]

