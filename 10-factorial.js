// Function to calculate factorial recursively
function factorial(n) {
    // Base case: factorial of 0 or 1 is 1
    if (isNaN(n) || n <= 1) {
        return 1;
    }
    // Recursive case: n! = n * (n-1)!
    return n * factorial(n - 1);
}

// Function to get and validate input
function computeFactorial() {
    // Get the first command-line argument
    const num = parseInt(process.argv[2]);

    if (isNaN(num)) {
        console.log("No argument or invalid argument. Factorial of NaN is 1.");
        return;
    }

    const result = factorial(num);
    console.log(`Factorial ${num} = ${result}`);
}

// Call the function to compute factorial
computeFactorial();
