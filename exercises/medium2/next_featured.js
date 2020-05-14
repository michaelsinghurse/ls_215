// next_featured.js

function allUniqueDigits(num) {
  let digits = {};
  let stringNum = String(num);
  
  for (let index = 0; index < stringNum.length; index += 1) {
    if (digits[stringNum[index]]) return false;
    digits[stringNum[index]] = 1;
  }

  return true;
}

function nextOddMultipleOfSeven(num) {
  while (true) {
    num += 1;
    if (num % 2 === 1 && num % 7 === 0) return num;
  }
}

function isFeatured(num) {
  if (num % 2 === 1 && num % 7 === 0 && allUniqueDigits(num)) return true;
  return false;
}

const featured1 = (() => {
  const FEATURED_NUMS = [];
  const MAX_FEATURED = 9876543201;

  return num => {
    let featuredArrayMax = FEATURED_NUMS[FEATURED_NUMS.length - 1] || 0;

    if (num < featuredArrayMax) {
      return FEATURED_NUMS.find(featured => featured > num);
    }

    let counter = featuredArrayMax + 1;
    
    while (counter <= MAX_FEATURED) {
      if (isFeatured(counter)) {
        FEATURED_NUMS.push(counter);
        
        if (counter > num) return counter; 
      }
      
      counter += 1;
    }

    return "there is no next featured number";
  };
})();

const featured2 = num => {
  const MAX_FEATURED = 9876543201;

  if (num >= MAX_FEATURED) return "there is no next featured number";
  if (num === MAX_FEATURED - 1) return MAX_FEATURED;

  let counter = num + 1;

  while (counter < MAX_FEATURED - 1) {
    if (isFeatured(counter)) return counter;
    counter += 1;
  }
};

const featured = num => {
  const MAX_FEATURED = 9876543201;

  if (num >= MAX_FEATURED) return "there is no next featured number";
  if (num === MAX_FEATURED - 1) return MAX_FEATURED;
  
  let counter = nextOddMultipleOfSeven(num);

  while (counter < MAX_FEATURED - 1) {
    if (allUniqueDigits(counter)) return counter;
    counter += 14;
  }
};

console.log(featured(12) === 21);
console.log(featured(20) === 21);
console.log(featured(21) === 35);
console.log(featured(997) === 1029);
console.log(featured(1029) === 1043);
console.log(featured(999999) === 1023547);
console.log(featured(999999987) === 1023456987);
console.log(featured(9876543200) === 9876543201);
console.log(featured(9876543202) === "there is no next featured number");
