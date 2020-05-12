// rail_fence_cipher.js

function encode(text, rails) {
  let array = [];
  array.length = rails;
  array.fill("");
  
  let rail = 0;
  let increasing;

  text.replace(/ /g, "").split("").forEach(character => {
    array[rail] += character;

    if (rail === 0) {
      increasing = true;
    }

    if (rail === rails - 1) {
      increasing = false;
    }

    if (increasing) {
      rail += 1;
    } else {
      rail -= 1;
    }
  });

  return array.reduce((accum, sum) => accum + sum); 
}

console.log(encode("WE ARE DISCOVERED FLEE AT ONCE", 3) ===
"WECRLTEERDSOEEFEAOCAIVDEN");
console.log(encode("WE ARE DISCOVERED FLEE AT ONCE", 4) ===
"WIREEEDSEEEACAECVDLTNROFO");
console.log(encode("WEAREDISCOVEREDFLEEATONCE", 3) ===
"WECRLTEERDSOEEFEAOCAIVDEN");

