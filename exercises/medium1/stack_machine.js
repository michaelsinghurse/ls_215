// stack_machine.js

function minilang(commands) {
  let stack = [];
  let register = 0;

  commands.split(" ").forEach(command => {
    if (/\d/.test(command)) {
      register = Number(command);
    } else {
      let value;
      switch (command) {
        case "PUSH":
          stack.push(register);
          break;
        case "ADD":
          value = stack.pop();
          register += value;
          break;
        case "SUB":
          value = stack.pop();
          register -= value;
          break;
        case "MULT":
          value = stack.pop();
          register *= value;
          break;
        case "DIV":
          value = stack.pop(); 
          register = Math.floor(register / value);
          break;
        case "MOD":
          value = stack.pop();
          register = register % value;
          break;
        case "POP":
          value = stack.pop();
          register = value;
          break;
        case "PRINT":
          console.log(register);
          break;
        default:
          throw new Error("Command not found!");
      }       
    }
  });
}

console.log("*******************************");
minilang('PRINT');
// 0

console.log("*******************************");
minilang('5 PUSH 3 MULT PRINT');
// 15

console.log("*******************************");
minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

console.log("*******************************");
minilang('5 PUSH POP PRINT');
// 5

console.log("*******************************");
minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

console.log("*******************************");
minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6

console.log("*******************************");
minilang('4 PUSH PUSH 7 MOD MULT PRINT');
// 12

console.log("*******************************");
minilang('-3 PUSH 5 SUB PRINT');
// 8

console.log("*******************************");
minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)




