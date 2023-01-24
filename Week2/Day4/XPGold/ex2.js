// Write a JavaScript function to convert a string into an abbreviated form.

// console.log(abbrevName("Robin Singh")); --> "Robin S."
function abbrevName(name){
    let arr = name.split(' ')
    arr[arr.length - 1] = `${arr[arr.length - 1][0]}.`
    return arr.join(' ')
}

console.log(abbrevName("Robin Singh"));