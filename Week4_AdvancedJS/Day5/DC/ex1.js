// Create a function that:

// takes in two strings as two parameters
// and returns a boolean that indicates whether or not the first string is an anagram of the second string.
const isAnagram = (string1, string2) => {
    const toSortedArr = (str) => {
        return str.toLowerCase().split("").filter(i => i !== ' ').sort()
    }
    return toSortedArr(string1).every((item, index)=> item === toSortedArr(string2)[index])
}
// Some Help

// What is an anagram?
// An anagram is another word or phrase formed by rearranging letters of the first word or phrase.

console.log(isAnagram("Astronomer", "Moon starerrrr")) //false
console.log(isAnagram("Astronomer", "Moon starer")) //true
console.log(isAnagram("School master", "The classroom")) //true

// Example of anagrams

// "Astronomer" is an anagram of "Moon starer"
// "School master" is an anagram of "The classroom"
// "The Morse Code" is an anagram of "Here come dots"


// Do we need to consider whitespace?
// Trim whitespace prior to comparison.