// Create a function that receives a weight in kilograms and returns it in grams. (Hint: 1 kg is 1000gr)

// First, use function declaration and invoke it.

console.log(takeWeight(3))

function takeWeight(kg){
    return kg*1000
}


// Then, use function expression and invoke it.
const takeWeight2 = function(kg){
    return kg*1000
}

console.log(takeWeight2(4))

// Write in a one line comment, the difference between function declaration and function expression.
//Function expressions load and execute only when the program interpreter reaches the line of code.
//Function declaration is hoisted, so can be used before declaration.

// Finally, use a one line arrow function and invoke it.
const takeWeight3 = kg => kg*1000

console.log(takeWeight3(5))