// lettercase_percent.js

function letterPercentages(input) {
  let output = {
    lowercase: (input.match(/[a-z]/g) || []).length,
    uppercase: (input.match(/[A-Z]/g) || []).length,
    neither: (input.match(/[^A-Z]/gi) || []).length,
  };

  Object.keys(output).forEach(key => {
    output[key] = (output[key] / input.length * 100).toFixed(2);
  });

  return output;
}


console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }
