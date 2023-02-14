const morse = `{
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
  }`
  // Create three functions. The two first functions should return a promise..

// The first function is named toJs():
// this function converts the morse json string provided above to a morse javascript object.
// if the morse javascript object is empty, throw an error (use reject)
// else return the morse javascript object (use resolve)

const toJs = () => {
    return new Promise((resolve, reject) => {
        if(morse){
            resolve(JSON.parse(morse))
        } else {
            reject('error!')
        }
    })
    
}

// The second function called toMorse(morseJS), takes one argument: the new morse javascript object.

// This function asks the user for a word or a sentence.
// if the user entered a character that doesn’t exist in the new morse javascript object, throw an error. (use reject)
// else return an array with the morse translation of the user’s word.
// if the user enters the word "Hello", the promise resolves with this value ["....", ".", ".-..", ".-..","---"]
// if the user entered the word "¡Hola!", the promise rejects because the character "¡" doesn't exist in the morse javascript object
const toMorse = (morseJS) => {
    const word = prompt('enter a word')
    return new Promise((resolve, reject) => {
        if(word.split('').every(letter => morseJS[letter])){
            resolve(word.split('').map(letter => morseJS[letter]))
        } else {
            reject(`${word.split('').find(letter => !morseJS[letter])} is not in morse`)
        }
    })
}

// The third function called joinWords(morseTranslation), takes one argument: the morse translation array
const joinWords = (morseTranslation) => {
    morseTranslation.forEach(element => {
        console.log(element + '\n')
    });
}
// this function joins the morse translation by using line break and display it on the page (ie. On the DOM)

// Chain the three functions.
toJs().then(res => toMorse(res)).then(res => joinWords(res)).catch(err => console.log(err))