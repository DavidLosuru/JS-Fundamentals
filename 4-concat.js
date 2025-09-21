#!/usr/bin/node

function printArguments() {
    const args = process.argv.slice(2);
    if (args.length === 0) {
        console.log("0 argument.");
    } else if (args.length === 1) {
        console.log(args[0]);
    } else if (args.length >= 2) {
        console.log(`${args[0]} is ${args[1]}`);
    }
}

printArguments();