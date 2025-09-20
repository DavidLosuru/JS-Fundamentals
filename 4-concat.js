#!/usr/bin/node

function printArguments(args) {
    if (args.length === 2) {
        console.log(`${args[0]} ${args[1]}`);
    } else if (args.length === 1) {
        console.log("HBTN");
    } else {
        console.log("");
    }
}

printArguments(process.argv.slice(2));