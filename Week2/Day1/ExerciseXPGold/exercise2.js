// Create 2 variables. The values should be strings. For example:
let str1 = "Hello";
let str2 = "World";

// 2. Slice out and swap the first 2 characters of the two strings from part 1.
let newWord1 = str2.slice(0, 2) + str1.slice(2, str1.length)
let newWord2 = str1.slice(0, 2) + str2.slice(2, str2.length)

// 3. Create a third variable where the value is the concatenation of the two strings from the part 1 (separated by a space).
let finalPhrase = newWord1 + ' ' + newWord2

// 4. Finally console.log the new concatenated string.
console.log(finalPhrase)
