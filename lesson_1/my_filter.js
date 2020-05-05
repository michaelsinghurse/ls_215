function myFilter(array, func) {
  let newArray = [];

  for (let index = 0; index < array.length; index += 1) {
    if (func(array[index], index, array)) {
      newArray.push(array[index]);
    }
  }

  return newArray;
}

let isPythagoreanTriple = function (triple) {
  return triple.a ** 2 + triple.b ** 2 === triple.c ** 2; 
};

console.log(
  myFilter([{ a: 3, b: 4, c: 5 },
            { a: 5, b: 12, c: 13 },
            { a: 1, b: 2, c: 3},
           ], isPythagoreanTriple)
);
