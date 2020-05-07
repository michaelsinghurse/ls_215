// staggered_caps2.js

function staggeredCase(string) {
  let count = 0;
  return string
    .split("")
    .map(character => {
      if (/[A-Za-z]/.test(character)) {
        if (count % 2 === 0) {
          character = character.toUpperCase();
        } else {
          character = character.toLowerCase();
        }
        count += 1;
      }
      return character;
    })
    .join("");
}

console.log(staggeredCase('I Love Launch School!') === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase('ALL CAPS') === "AlL cApS");
console.log(staggeredCase('ignore 77 the 444 numbers') 
  === "IgNoRe 77 ThE 444 nUmBeRs");
