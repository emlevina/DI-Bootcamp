
// Create a function that takes a string as an argument.
function capitalize(string) {
    let arrOdd = []
    let arrEven = []
    string.split('').forEach((element, index) => {
        if (index % 2 == 0) {
            arrEven.push(element.toUpperCase())
            arrOdd.push(element)
        } else {
            arrEven.push(element)
            arrOdd.push(element.toUpperCase())
        }
    });

    return [ arrEven.join(''), arrOdd.join('')]
}
// Have the function return:
// The string but all letters in even indexes should be capitalized.
// The string but all letters in odd indexes should be capitalized.
// Note:

// Index 0 will be considered even.
// The argument of the function should be a lowercase string with no spaces.
// For example,

// capitalize("abcdef") will return ['AbCdEf', 'aBcDeF']
console.log(capitalize("abcdef"))