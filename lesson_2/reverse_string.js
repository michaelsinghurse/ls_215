// reverse_string.js

function reverse1(string) {
  return string.split("").reverse().join("");
}

function reverse2(string) {
  let result = "";
  string.split("").forEach(character => result = character + result);
  return result;
}

function reverse(string) {
  let result = "";
  for (let index = 0; index < string.length; index += 1) {
    result += string[string.length - 1 - index];
  }
  return result;
}

console.log(reverse("hello") === "olleh");
console.log(reverse('The quick brown fox') === "xof nworb kciuq ehT");
