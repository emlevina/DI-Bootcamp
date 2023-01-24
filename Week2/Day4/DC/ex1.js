// Prompt the user for several words (separated by commas).
let words = prompt('Enter a string of several words')
// Put the words into an array.
// Console.log the words one per line, in a rectangular frame as seen below.
function starWords(string) {
    let words = string.split(' ')
    let maxLength = 0
    for(word of words){
        if(word.length > maxLength){
            maxLength = word.length
        }
    }

    console.log('*'.repeat(maxLength + 4))
    for(word of words){
        word = `* ${word} ${" ".repeat(maxLength - word.length)}*`
        console.log(word)
    }
    console.log('*'.repeat(maxLength + 4))
}

starWords(words)