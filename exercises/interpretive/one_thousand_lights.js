// one_thousand_lights.js

function getBooleanArray(count, value = false) {
  let output = [];
  output.length = count;
  output.fill(value);
  return output;
}

function indecesWithTruthyValues(array, offset = 0) {
  return array 
    .map((element, index) => {
       return !!element ? index + offset : element; 
    })
    .filter(element => !!element);
}

function lightsOn(numSwitches) {
  if (
    typeof numSwitches !== "number" || 
    numSwitches <= 0 || 
    numSwitches % 1 !== 0
  ) return [];

  let switches = getBooleanArray(numSwitches);

  for (let round = 1; round <= numSwitches; round += 1) {
    let index = round - 1;
    while (index < numSwitches) {
      switches[index] = !switches[index]; 
      index += round;
    }
  }

  return indecesWithTruthyValues(switches, 1);
}

console.log(lightsOn(1));       // [1]
console.log(lightsOn(2));       // [1]
console.log(lightsOn(3));       // [1]
console.log(lightsOn(4));       // [1, 4]
console.log(lightsOn(5));       // [1, 4]
console.log(lightsOn(100));     // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100] ( ==> perfect squares)

// invalid input
console.log(lightsOn("five"));  // []
console.log(lightsOn(0));       // []
console.log(lightsOn(-5));      // []
console.log(lightsOn(5.5));     // []

