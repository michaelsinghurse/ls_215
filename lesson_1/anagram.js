// anagram.js

function charArray(string) {
  return string.toLowerCase().split("").sort();
}

function anagram1(word, words) {
  let wordChars = charArray(word); 

  return words.filter(element => {
    if (word.length !== element.length) return false;

    let elementChars = charArray(element);

    for (let index = 0; index < wordChars.length; index += 1) {
      if (wordChars[index] !== elementChars[index]) return false;
    }

    return true;
  });
}

function areAnagrams(string1, string2) {
  if (string1.length !== string2.length) return false;

  let charArray1 = charArray(string1);
  let charArray2 = charArray(string2);

  return charArray1.every((element, index) => element === charArray2[index]);
}

function anagram(word, words) {
  return words.filter(element => areAnagrams(word, element));
}

console.log(anagram('listen', ['enlists', 'google', 'inlets', 'banana']));  
// [ "inlets" ]

console.log(anagram('listen', ['enlist', 'google', 'inlets', 'banana']));   
// [ "enlist", "inlets" ]
