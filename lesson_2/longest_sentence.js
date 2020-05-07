// longest_sentence.js

let longText = 'Four score and seven years ago our fathers brought forth' +
  ' on this continent a new nation, conceived in liberty, and' +
  ' dedicated to the proposition that all men are created' +
  ' equal.' +
  ' Now we are engaged in a great civil war, testing whether' +
  ' that nation, or any nation so conceived and so dedicated,' +
  ' can long endure. We are met on a great battlefield of that' +
  ' war. We have come to dedicate a portion of that field, as' +
  ' a final resting place for those who here gave their lives' +
  ' that that nation might live. It is altogether fitting and' +
  ' proper that we should do this.' +
  ' But, in a larger sense, we can not dedicate, we can not' +
  ' consecrate, we can not hallow this ground. The brave' +
  ' men, living and dead, who struggled here, have' +
  ' consecrated it, far above our poor power to add or' +
  ' detract. The world will little note, nor long remember' +
  ' what we say here, but it can never forget what they' +
  ' did here. It is for us the living, rather, to be dedicated' +
  ' here to the unfinished work which they who fought' +
  ' here have thus far so nobly advanced. It is rather for' +
  ' us to be here dedicated to the great task remaining' +
  ' before us -- that from these honored dead we take' +
  ' increased devotion to that cause for which they gave' +
  ' the last full measure of devotion -- that we here highly' +
  ' resolve that these dead shall not have died in vain' +
  ' -- that this nation, under God, shall have a new birth' +
  ' of freedom -- and that government of the people, by' +
  ' the people, for the people, shall not perish from the' +
  ' earth.';

// The problem states a sentence starts with a word character. I chose not to 
// use the word character class shortcut "\w" because it includes the underscore
// character, and it would be unusual for a sentence to start with an underscore.
const REGEX_SENTENCE_BEGIN = /[A-Za-z0-9]/g;

const REGEX_SENTENCE_END = /[?!.]/g;

// A word is a sequence of non-white-space and non-sentence-ending characters. 
const REGEX_WORD = /[^\s?!.]+/g;

function getSentencesArray(text) {
  let sentences = [];
  let sentence = "";
  let inSentence = false;

  for (let index = 0; index < text.length; index += 1) {
    let character = text[index];

    if (!inSentence) {
      if (REGEX_SENTENCE_BEGIN.test(character)) {
        sentence += character;
        inSentence = true;
      }
    } else {
      if (REGEX_SENTENCE_END.test(character)) {
        sentence += character;
        sentences.push(sentence);
        sentence = "";
        inSentence = false;
      } else {
        sentence += character;
      }
    }
  }

  return sentences;
}

function getWordCount(text) {
  let words = text.match(REGEX_WORD) || [];
  return words.length;
}

function logResults(sentence, length) {
  console.log(sentence);
  console.log("");
  console.log(`The longest sentence has ${length} words.`);
}

function longestSentence(text) {
  let sentences = getSentencesArray(text);
  let maxLength = 0;
  let maxIndex;
  
  sentences.forEach((sentence, index) => {
    let sentenceLength = getWordCount(sentence);
    if (sentenceLength > maxLength) {
      maxLength = sentenceLength;
      maxIndex = index;
    }
  });

  logResults(sentences[maxIndex], maxLength);
}

longestSentence(longText);


