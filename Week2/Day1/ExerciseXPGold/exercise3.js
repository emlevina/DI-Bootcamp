    // Make a Calculator. Follow the instructions:

    // Prompt the user for the first number.
    // Store the first number in a variable called num1.
    let num1 = prompt('Enter the first number');
    // Hint : console.log the type of the variable num1. What should you do to convert it to a number ?
    console.log(num1);
    num1 = parseInt(num1)
    // Prompt the user for the second number.
    // Store the second number in a variable called num2.
    let num2 = prompt('Enter the second number');
    num2 = parseInt(num2)
    // Create an Alert where the value is the SUM of num1 and num2.
    let operation = prompt('Choose operation type: 1 == ADD, 2 == SUBSTRACT, 3 == MULTIPLY, 4 == DIVIDE')


    switch(operation){
        case '1': 
            alert(`${num1 + num2}`);
            break;
        case '2': 
            alert(`${num1 - num2}`);
            break;
        case '3': 
            alert(`${num1 * num2}`);
            break;
        case '4': 
            alert(`${num1 / num2}`);
            break;
        default: 
            'Wrong operation type'
    }
    // BONUS: Make a program that can subtract, multiply, and also divide!

