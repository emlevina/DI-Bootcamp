// Hint: if statement (tomorrow’s lesson)

// Prompt the user for a number. Depending on the users number you will return a string of the word “Boom”. Follow the rules below:
let num = prompt('Insert a number');
num = parseInt(num);
let returnedBoom;

// If the number given is less than 2 : return “boom”
// If the number given is bigger than 2 : the string should include n number of “o”s (n being the number given)
if(num < 2){
    returnedBoom = 'boom'
} else {
    returnedBoom = `b${"o".repeat(num)}m`
}

// If the number given is evenly divisible by 2, add a exclamation mark to the end.
if(num % 2 === 0){
    returnedBoom = returnedBoom + "!"
}

// If the number given is evenly divisible by 5, return the string in ALL CAPS.
// If the number given is evenly divisible by both 2 and 5, return the string in ALL CAPS and add an exclamation mark to the end.
if(num % 5 === 0){
    returnedBoom = returnedBoom.toUpperCase()
}

console.log(returnedBoom)

