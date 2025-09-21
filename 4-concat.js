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
