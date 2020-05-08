// version_numbers.js

function getNumberArray(version) {
  return version.split(".").map(Number);
}

function isValidVersion(version) {
  if (
    version.match(/[^\d.]/) ||      // only digits and dots
    version.match(/\.{2,}/) ||      // no consecutive dots
    version[0] === "." ||           // no leading dots
    version.slice(-1) === "."       // no trailing dots
  ) return false;
  return true;
}

function compareVersions(version1, version2) {
  if (!isValidVersion(version1) || !isValidVersion(version2)) return null; 

  let array1 = getNumberArray(version1);
  let array2 = getNumberArray(version2);

  let index = 0;
  while (true) {
    let num1 = array1[index];
    let num2 = array2[index];
    
    if (num1 !== undefined && num2 !== undefined) {
      if (num1 < num2) return -1;
      if (num1 > num2) return 1;
    } else if (num1 === undefined && num2 !== undefined) {
      if (num2 > 0) return -1;
    } else if (num1 !== undefined && num2 === undefined) {
      if (num1 > 0) return 1;
    } else if (num1 === undefined && num2 === undefined) {
      return 0;
    }

    index += 1;
  }
}

console.log(compareVersions("0.1", "1") === -1);
console.log(compareVersions("1", "1.0") === 0); 
console.log(compareVersions("1.0", "1.1") === -1);
console.log(compareVersions("1.1", "1.2") === -1);
console.log(compareVersions("1.2", "1.2.0.0") === 0);
console.log(compareVersions("1.2.0.0", "1.18.2") === -1);
console.log(compareVersions("1.18.2", "13.37") === -1);
console.log(compareVersions("1.1", "1") === 1); 
console.log(compareVersions("1.13.2", "1.2.0.0") === 1);
console.log(compareVersions("2", "1") === 1);
console.log(compareVersions("0", "0") === 0);
console.log(compareVersions("1.0.0.1", "1") === 1);
console.log(compareVersions("1.a", "2") === null);
console.log(compareVersions("1..2", "2") === null);
console.log(compareVersions("1", ".2") === null);
console.log(compareVersions("1", "2.") === null);


