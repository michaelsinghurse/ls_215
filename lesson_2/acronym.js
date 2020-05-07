// acronym.js

function acronym(string) {
  if (typeof string !== "string") return undefined;

  return string
    .split(/[\- ]+/)
    .reduce((result, val) => {
      result += val[0].toUpperCase();
      return result;
    }, "");
}

console.log(acronym('Portable Network Graphics') === "PNG");
console.log(acronym('First In, First Out') === "FIFO");
console.log(acronym('PHP: HyperText Preprocessor') === "PHP");
console.log(acronym('Complementary metal-oxide semiconductor') === "CMOS");
console.log(acronym('Hyper-text   Markup Language') === "HTML");
