// In the file script.js display the result of the function created in date.js.
const yourLifeInMinutes = require('./date')
// Bonus: Try to find a node module that allows to prompt the user for his birthdate.

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('When is your birthday? (YYYY-MM-DD)\n', input => {
    console.log(yourLifeInMinutes(input))
    readline.close();
});


