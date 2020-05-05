// formatting_bands.js

let bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

let removePeriods = string => string.replace(/\./g, "");

let capitalize = words => {
  return words 
    .split(" ")
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(" ");
};

let formatName = name => removePeriods(capitalize(name));

function processBands1(bands) {
  return bands.map(band => {
    let newBand = Object.assign({}, band);
    newBand.name = formatName(newBand.name);
    newBand.country = "Canada";
    return newBand;
  });
}

function processBands(bands) {
  return bands.map(band => {
    return {
      "name": formatName(band.name),
      "country": "Canada",
      "active": band.active,
    };
  });
}

let cleanBands = processBands(bands);
console.log(cleanBands);
console.log(bands);
