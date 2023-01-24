// Write a program to check whether a string is blank or not.

// console.log(isBlank('')); --> true
// console.log(isBlank('abc')); --> false

function isBlank(string){
    if(!string){
        return true
    } else {
        return false
    }
}

console.log(isBlank('')); 
console.log(isBlank('abc'));