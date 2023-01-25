// Prompt player 1 for a word. The word must have a minimum of 8 letters. Present the word in the console with stars (********).
let word = prompt('Player1, please enter a word')
if (!word) {
    alert('OK, buy')
} else {
    while (word.length < 8) {
        word = prompt('Please, choose a word of at least 8 characters')
    }
    let wordHidden = '*'.repeat(word.length)
    console.log(wordHidden)
    let usedLetters = []
    let numberOfAttempts = 10
    let numberOfFails = 0;
    while (numberOfFails <= numberOfAttempts) {
        // At this point continuously prompt player 2 for a letter.
        let userLetter = prompt('Player2, please enter a letter')
        while (usedLetters.includes(userLetter) || userLetter.length > 1) {
            userLetter = prompt('Player2, you already used this letter, please, choose another')
        }
        usedLetters.push(userLetter)
        console.log(`Your current guess is: ${userLetter}.`)
        // If the letter is in the word chosen by player 1, display the word in stars again but with the correct letter (*****t**).
        if (word.indexOf(userLetter) >= 0) {
            // If the letter appears in the word multiple times, make sure it is seen in all the correct places when showing the stars with the correct guesses (***t**t*).
            let newArr = wordHidden.split('')
            for (let i = 0; i < word.length; i++) {
                if (word[i] === userLetter) {
                    newArr[i] = userLetter
                }
            }
            wordHidden = newArr.join('')
            console.log(wordHidden)
            console.log("%cThat\'s right!", "color: #bada55")
        } else {
            numberOfFails++
            console.log("%cThat\'s wrong!", "color: red")
        }

        if (wordHidden === word) {
            // If player 1 wins, display a message that says CONGRATS YOU WIN.
            console.log("%cPlayer2 WINS! "+"%cAnd Player1 loses...", "color: green", "color: white")
            break;
        }

        if (numberOfFails === numberOfAttempts) {
             // If player 2 guesses incorrectly 10 times display a message in the console saying YOU LOSE.
            console.log("%cPlayer1 WINS! "+"%cAnd Player2 loses...", "color: green", "color: white")
            // Show a list of all the guesses after each turn. In your code prevent player 2 from guessing the same letter twice.
            console.log(`You tried these letters: ${usedLetters}. And the word was ${word}`)
            break;
        }

        console.log(`You have ${numberOfAttempts - numberOfFails} attempts left`)
    }   
}
