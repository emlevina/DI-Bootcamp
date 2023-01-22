// Ask the user to give you a sentence containing the word “Nemo”. For example "I love the movie named Nemo"
let sentence = prompt('a sentence containing the word Nemo')
// Find the word “Nemo”
sentence = sentence.split(' ')
let nemoIndex = sentence.indexOf('Nemo')
if (nemoIndex >= 0) {
    console.log(`I found Nemo at ${nemoIndex}`)
} else {
    console.log('I can\’t find Nemo')
}
// Console.log a string as follows: "I found Nemo at [the position of the word Nemo]".
// If you can’t find Nemo, console.log “I can’t find Nemo”.