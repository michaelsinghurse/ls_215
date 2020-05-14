// triangle_sides.js

function triangle(...sides) {
  if (sides.length !== 3 || sides.some(side => typeof side !== "number")) {
    return undefined;
  }

  sides.sort((a, b) => a - b);
  if (sides.some(side => side <= 0) || sides[0] + sides[1] <= sides[2]) {
    return "invalid";
  }

  if (sides[0] === sides[1] && sides[1] === sides[2]) {
    return "equilateral";
  } else if ( sides[0] === sides[1] || sides[1] === sides[2]) {
    return "isosceles"
  } else {
    return "scalene";
  }
}

// valid
console.log(triangle(3, 3, 3) === "equilateral");
console.log(triangle(3, 3, 1.5) === "isosceles");
console.log(triangle(3, 4, 5)=== "scalene");

// side is less than or equal to 0
console.log(triangle(0, 3, 3) === "invalid");

// two short sides are not greater than long side
console.log(triangle(3, 1, 1) === "invalid");

// non-number input
console.log(triangle("5", "12", "13") === undefined);

// invalid input
console.log(triangle([3, 4, 5]) === undefined);
console.log(triangle(3, 4) === undefined);
