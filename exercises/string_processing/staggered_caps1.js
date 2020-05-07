// staggered_caps1.js

function staggeredCase(string) {
  return string
    .split("")
    .map((character, index) => {
      return index % 2 === 0 ? 
        character.toUpperCase() : character.toLowerCase();
    })
    .join("");
}

console.log(staggeredCase('I Love Launch School!') === "I LoVe lAuNcH ScHoOl!");
console.log(staggeredCase('ALL_CAPS') === "AlL_CaPs");
console.log(staggeredCase('ignore 77 the 444 numbers') 
  === "IgNoRe 77 ThE 444 NuMbErS");
