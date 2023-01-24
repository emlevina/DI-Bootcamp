// Write a JavaScript function that checks whether a string is a palindrome or not.
// Note A palindrome is a word, phrase or sequence that is spelled the same both backwards and forward, e.g., madam, bob or kayak.

function isPalindrome(string){
    string = string.split('')
    for(let i = 0; i < string.length / 2; i++){
        if(string[i] !== string[string.length-1-i]){
            return false
        }
    }
    return true
}

console.log(isPalindrome('madam')) // true 
console.log(isPalindrome('madama')) // false
console.log(isPalindrome('kayak')) // true