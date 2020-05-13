// fibo_procedural.js

function fibonacci0(nth) {
  let nMinus2;
  let nMinus1;
  let fibo;

  for (let index = 1; index <= nth; index += 1) {
    if (index === 1 || index === 2) {
      nMinus2 = 0;
      nMinus1 = 1;
    } else {
      [ nMinus2, nMinus1 ] = [ nMinus1, fibo ];
    }

    fibo = nMinus2 + nMinus1;
  }

  return fibo;
}

console.log(fibonacci(1) === 1);
console.log(fibonacci(2) === 1);
console.log(fibonacci(3) === 2);
console.log(fibonacci(20) === 6765);
console.log(fibonacci(50) === 12586269025);
console.log(fibonacci(75) === 2111485077978050);
