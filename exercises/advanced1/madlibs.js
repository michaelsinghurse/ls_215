// madlibs.js

function randomWordFromPartOfSpeech(part) {
  let array;
  switch (part) {
    case "name":
      array = NAMES;
      break;
    case "adjective":
      array = ADJECTIVES;
      break;
    case "adverb":
      array = ADVERBS;
      break;
    case "verb":
      array = VERBS;
      break;
    default:
      return;
  }

  let randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

function madlibs(template) {
  return template.replace(/%%\w+%%/g, token => {
    let part = token.replace(/%/g, "");
    let replacement = randomWordFromPartOfSpeech(part);

    if (!replacement) {
      return token;
    } else {
      return replacement;
    }
  });
}

let template1 = "%%name%% is very %%adjective%%. %%name%%'s " +
  "favorite person is %%name%%. %%name%% runs %%adverb%% and eats %%adverb%% " +
  "even while everyone else %%verb%%.";

const NAMES = ["Daddy", "Mommy", "Zofia", "Bernadette", "Nathanael"];
const ADJECTIVES = ["funny", "hungry", "tired", "exicted", "happy"];
const ADVERBS = ["quickly", "slowly", "purposely", "lazily", "loudly"];
const VERBS = ["runs", "sleeps", "eats", "works"];

console.log(madlibs(template1));


