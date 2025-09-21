// Check if an argument is provided
if (process.argv.length < 3) {
  console.log("Not a number");
} else {
  // Get the first command-line argument
  const arg = process.argv[2];

  // Check if the argument is a number
  const num = Number.isInteger(+arg) ? parseInt(arg) : NaN;

  // Print the result
  if (isNaN(num)) {
    console.log("Not a number");
  } else {
    console.log(`My number: ${num}`);
  }
}