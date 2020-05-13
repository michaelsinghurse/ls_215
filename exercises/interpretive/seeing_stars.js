// seeing_stars.js

function spaceAndStarRow(outerPad, innerPad) {
  return " ".repeat(outerPad) +
         "*"                  +
         " ".repeat(innerPad) +
         "*"                  +
         " ".repeat(innerPad) +
         "*"                  +
         " ".repeat(outerPad) +
         "\n";
}

function starRow(size) {
  return "*".repeat(size) +
         "\n";
}

function star(size) {
  let output = "";
  let numRows = Math.floor(size / 2);

  for (let counter = 0; counter < numRows; counter += 1) {
    output += spaceAndStarRow(counter, numRows - 1 - counter);
  }

  output += starRow(size);

  for (let counter = numRows - 1; counter >= 0; counter -= 1) {
    output += spaceAndStarRow(counter, numRows - 1 - counter);
  }

  output = output.slice(0, -1);   // trim off final new line
  
  console.log(output);
}

star(7);
console.log("");
star(9);
console.log("");
star(11);





