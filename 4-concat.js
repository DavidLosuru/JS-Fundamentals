// Define a function to print arguments
function printArguments(arg1, arg2) {
  console.log(`${arg1} is ${arg2}`);
}

// Get command line arguments
const arg1 = process.argv[2];
const arg2 = process.argv[3];

// Check if arguments are provided
if (arg1 && arg2) {
  printArguments(arg1, arg2);
} else {
  console.log("Please provide two arguments");
}