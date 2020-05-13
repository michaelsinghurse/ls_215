// diamonds.js

function spaceAndStarLine(numSpaces, numStars) {
  return " ".repeat(numSpaces) + 
         "*".repeat(numStars) + 
         " ".repeat(numSpaces) +
         "\n";
}

function diamond(size) {
  let star = "";
  let numSpaces = Math.floor(size / 2);
  let numStars = 1;
  
  for (let row = 1; row <= size; row += 1) {
    console.log(numSpaces, numStars);
    star += spaceAndStarLine(numSpaces, numStars);

    if (row < Math.ceil(size / 2)) {
      numSpaces -= 1;
      numStars += 2;
    } else {
      numSpaces += 1;
      numStars -= 2;
    }
  }
  
  star = star.slice(0, -1);  // trim off last new line
  console.log(star);
}

diamond(1);
diamond(3);
diamond(5);
diamond(7);


