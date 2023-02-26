// Ask the user for his full name (example: “John Doe”), and check the validity of his answer:
// The name should contain only letters.
// The name should contain only one space.
// The first letter of each name should be upper cased.

const checkIfValid = (name) => {
    let regex = /^[A-Z][a-z]*\s[A-Z][a-z]*$/
    return regex.test(name)
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter your full name, starting with capital letters, e.g. John Doe\n', input => {
    console.log(checkIfValid(input))
    readline.close();
});