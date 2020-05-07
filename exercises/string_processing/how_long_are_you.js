// how_long_are_you.js

/*
Problem
- write a function `wordLengths`
- input
  - string
- output
  - array
- rules
  - the function returns an array that has an element for every word
    in the string. each element is a string consisting of the word, a space
    and the length of the word.
  - strings are separated by spaces
  - return an empty array for non-stings and empty strings
  
Example
wordLengths('cow sheep chicken');
// ["cow 3", "sheep 5", "chicken 7"]

wordLengths('baseball hot dogs and apple pie');
// ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

wordLengths("It ain't easy, is it?");
// ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

wordLengths('Supercalifragilisticexpialidocious');
// ["Supercalifragilisticexpialidocious 34"]

wordLengths('');      // []
wordLengths();        // []

Data Structure
- Array

Algorithm
- guard clause to check for empty string and no arguments
- split the string into an array
- map each word element to a new element
  - the new element is the string, a space, and the string's length
- return the array
*/

function wordLengths(string) {
  if (string === "" || string === undefined) return [];

  return string
    .split(" ")
    .map(word => word + " " + word.length);
}

console.log(wordLengths('cow sheep chicken'));
// ["cow 3", "sheep 5", "chicken 7"]

console.log(wordLengths('baseball hot dogs and apple pie'));
// ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

console.log(wordLengths("It ain't easy, is it?"));
// ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

console.log(wordLengths('Supercalifragilisticexpialidocious'));
// ["Supercalifragilisticexpialidocious 34"]

console.log(wordLengths(''));      // []
console.log(wordLengths());        // []
