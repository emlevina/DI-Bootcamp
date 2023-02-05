// Write a JavaScript arrow function that checks whether the value of the argument passed, is a string or not. Use ternary operator
const isString = (string) => {
    return typeof(string) === "string" ? true : false
}
// Check out the example below to see the expected output
// Example:

console.log(isString('hello')); 
// //true
console.log(isString([1, 2, 4, 0]));
// //false