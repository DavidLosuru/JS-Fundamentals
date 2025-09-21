function printSquare(size) {
    let sizeNumber = parseInt(size);
    if (isNaN(sizeNumber)) {
        console.log("Missing size");
        return;
    }

    for (let i = 0; i < sizeNumber; i++) {
        let row = '';
        for (let j = 0; j < sizeNumber; j++) {
            row += 'X';
        }
        console.log(row);
    }
}

// Call the function with the first command-line argument
printSquare(process.argv[2]);
