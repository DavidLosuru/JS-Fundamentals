#!/usr/bin/node

function printArgs() {
    const args = process.argv.slice(2);
    switch (args.length) {
        case 0:
            console.log("No argument");
            break;
        case 1:
            console.log(`${args[0]}`);
            break;
        default:
            console.log(`${args[0]} is ${args[1]}`);
    }
}

printArgs();