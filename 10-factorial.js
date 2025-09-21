// Get the first argument (skip 'node' and script filename)
const arg = process.argv[2];

// Print "No argument" if no argument provided
if (arg === undefined) {
    console.log("No argument");
    process.exit(0);
}

// Parse argument to integer (using BigInt for large inputs)
const n = BigInt(arg);

function factorial(num) {
    // Handle NaN by checking if num is Not a Number or negative
    // BigInt throws if input is not a valid number, so no NaN here
    // Instead, check if input is negative: treat negative factorial as 1 (optional)
    
    // Base case
    if (num <= 0n) {
        return 1n;
    }
    // Recursive case
    return num * factorial(num - 1n);
}

try {
    // If arg cannot be converted to a BigInt (e.g. NaN or invalid), it will throw
    // So wrap in try-catch
    // We also allow inputs like "4.5" cast to 4 by taking floor

    // convert arg to number to check for NaN
    const numAsNumber = Number(arg);

    if (isNaN(numAsNumber)) {
        console.log("Factorial 1");
    } else {
        // floor the number and convert to BigInt
        const numInt = BigInt(Math.floor(numAsNumber));

        const result = factorial(numInt);
        console.log(`Factorial ${result.toString()}`);
    }
} catch (error) {
    // If BigInt conversion failed, treat factorial as 1 
    console.log("Factorial 1");
}