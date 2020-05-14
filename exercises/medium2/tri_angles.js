// tri_angles.js

function triangle(angle1, angle2, angle3) {
  let biggest = Math.max(angle1, angle2, angle3);
  let smallest = Math.min(angle1, angle2, angle3);
  let middle = angle1 + angle2 + angle3 - biggest - smallest;

  if (smallest <= 0 || smallest + middle + biggest !== 180) {
    return "invalid"
  }

  if (biggest > 90) {
    return "obtuse";
  } else if (biggest === 90) {
    return "right";
  } else {
    return "acute";
  }
}

console.log(triangle(60, 70, 50) === "acute");
console.log(triangle(30, 90, 60) === "right");
console.log(triangle(120, 50, 10) === "obtuse");

// angle less than or equal to 0
console.log(triangle(0, 90, 90) === "invalid");
console.log(triangle(45, 45, -90) === "invalid");

// angles do not sum to 180
console.log(triangle(50, 50, 50) === "invalid");


