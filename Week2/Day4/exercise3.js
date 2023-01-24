// Create a function call isDivisible() that takes no parameter.
function isDivisible(divisor = 23) {
    let sum = 0
    // In the function, loop through numbers 0 to 500.
    for (let i = 0; i <= 500; i++) {
        // Console.log all the numbers divisible by 23.
        if(i % divisor === 0){
            console.log(i)
            sum += i
        }
    }
    // At the end, console.log the sum of all numbers that are divisible by 23.
    console.log(`Sum: ${sum}`)    
}

isDivisible()

// Outcome : 0 23 46 69 92 115 138 161 184 207 230 253 276 299 322 345 368
// 391 414 437 460 483
// Sum : 5313


// Bonus: Add a parameter divisor to the function.

isDivisible(3)
isDivisible(45)

// Example:
// isDivisible(3) : Console.log all the numbers divisible by 3, and their sum
// isDivisible(45) : Console.log all the numbers divisible by 45, and their sum
