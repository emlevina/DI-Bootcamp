// Prompt the user for a number and save it to a variable.
// Check whether the variable is even or odd.
// If it is even, display: “x is an even number”. Where x is the actual number the user chose.
// If it is odd, display: “x is an odd number”. Where x is the actual number the user chose.

let num = prompt('Please, insert a number')

if(Number(num) % 2 === 0){
    alert(`${num} is an even number`)
} else {
    alert(`${num} is an odd number`)
}