const args = process.argv.slice(2);

if (args.length === 0 || isNaN(Number(args[0]))) {
    console.log("Missing number of occurrences");
    process.exit(1);
}

const occurrences = Number(args[0]);

for (let i = 0; i < occurrences; i++) {
    console.log("C is fun");
}