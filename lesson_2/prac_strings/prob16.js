// prob16.js

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function getGreeting(name) {
  if (name.endsWith("!")) {
    return `HELLO ${name.slice(0, -1).toUpperCase()}. WHY ARE WE SCREAMING?`;
  } else {
    return `Hello ${name}.`;
  }
}

rl.question("What is your name? ", name => {
  let greeting = getGreeting(name);
  console.log(greeting);

  rl.close();
});

