// Write a JavaScript function that takes 2 parameters: a string and a number.
// The function should chop the string into chunks of your chosen length (the second parameter), and the outcome should be represented in an array.
const string_chop = (string, chunks) => {
    let arr = []
    for(let i = 0; i < string.length; i +=chunks){
        arr.push(string.slice(i, i+chunks))
    }
    return arr
}
// Example:

console.log(string_chop('developers',2)); 
["de", "ve", "lo", "pe", "rs"] 