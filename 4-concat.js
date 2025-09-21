#!/usr/bin/node

function printArgs() {
  const args = process.argv.slice(2);
  if (args.length === 2) {
    console.log(`${args[0]} is ${args[1]}`);
  } else if (args.length === 1) {
    console.log(`${args[0]}`);
  } else {
    console.log();
  }
}

printArgs();
const arg1 = process.argv[2];
const arg2 = process.argv[3];

if (arg1 && arg2) {
  console.log(`${arg1} is ${arg2}`);
} else if (arg1) {
  console.log(`${arg1}`);
} else {
  console.log();
}

