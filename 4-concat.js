#!/usr/bin/node

function printArguments() {
  if (process.argv.length === 2) {
    console.log();
  } else if (process.argv.length === 3) {
    console.log(`${process.argv[2]} is ${process.argv[2]}`);
  } else if (process.argv.length > 3) {
    console.log(`${process.argv[2]} is ${process.argv[3]}`);
  }
}

printArguments();