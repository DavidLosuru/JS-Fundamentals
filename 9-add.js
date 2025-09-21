#!/usr/bin/node

function add(a, b) {
  if (isNaN(a) || isNaN(b)) {
    console.log('NaN');
  } else {
    console.log(a + b);
  }
}

const args = process.argv.slice(2).map(Number);

if (args.length === 0) {
  console.log('NaN');
} else if (args.length === 1) {
  add(args[0], 0);
} else {
  add(args[0], args[1]);
}