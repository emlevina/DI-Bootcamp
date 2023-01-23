// Prompt the user for a word and save it to a variable.
let word = prompt('Enter the word');
// Delete all the vowels of the word and console.log the result.
word = word.replace(new RegExp('a', 'g'), '1').replace(new RegExp('e', 'g'), '2')
    .replace(new RegExp('i', 'g'), '3').replace(new RegExp('o', 'g'), '4')
    .replace(new RegExp('u', 'g'), '5')
// Bonus: Replace the vowels with another character and console.log the result
console.log(word);
