// multiply_all_pairs.js

function multiplyAllPairs(array1, array2) {
  if (!Array.isArray(array1) || !Array.isArray(array2)) return undefined;

  let product = [];

  array1.forEach(element1 => {
    array2.forEach(element2 => {
      product.push(element1 * element2);
    });
  });

  product.sort((num1, num2) => num1 - num2);

  return product;
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    
// [2, 4, 4, 6, 8, 8, 12, 16]

console.log(multiplyAllPairs(5, [1, 2, 3]));
// undefined
