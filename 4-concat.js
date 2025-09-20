#!/usr/bin/node

function printArguments(argv) {
    if (argv.length === 2) {
        console.log();
    } else if (argv.length === 3) {
        console.log(argv[2]);
    } else if (argv.length > 3) {
        console.log(`${argv[2]} ${argv[3]}`);
    }
}

printArguments(process.argv);