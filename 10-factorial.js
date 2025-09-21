function factorial(n = NaN) {
  const num = parseInt(n);
  if (isNaN(num)) return 1;
  if (num < 0) {
    console.log("Factorial is not defined for negative numbers.");
    return;
  }
  if (num === 0 || num === 1) return 1;
  return num * factorial(num - 1);
}

function main() {
  const args = process.argv.slice(2);
  if (args.length === 0) {
    console.log("No argument");
    return;
  }
  const result = factorial(args[0]);
  if (result !== undefined) console.log(`Factorial ${args[0]} = ${result}`);
}

main();
