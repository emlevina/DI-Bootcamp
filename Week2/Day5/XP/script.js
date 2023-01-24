function playTheGame() {
    let answer = confirm('Would you like to play the game?')

    if (!answer) {
        alert('No problem, bye')
    } else {
        let userNumber = validatedPropmt()
        let computerNumber = Math.random() * 10 + .5 | 0
        compareNumbers(userNumber, computerNumber)
    }

    return
}

function compareNumbers(userNumber, computerNumber) {
    for (let count = 1; count <= 3; count++) {
        if (!userNumber) {
            alert('Apparently you don\'t want to play')
            return
        } else if (userNumber === computerNumber) {
            alert('Winner')
            return
        } else if (count === 3){
            alert('Out of chances')
            return
        } else if (userNumber > computerNumber) {
            alert('Your number is bigger then the computer’s, guess again')
            userNumber = validatedPropmt()
        } else {
            alert('Your number is lower then the computer’s, guess again')
            userNumber = validatedPropmt()
        }
    }
}

function validatedPropmt() {
    let userNumber = prompt('Enter number from 1 to 10')

    if(userNumber === null){
        return userNumber
    }

    while (!userNumber || Number(userNumber) <= 0 || Number(userNumber) > 10) {
        userNumber = prompt(`PLEASE! Enter number from 1 to 10`)
    }

    return Number(userNumber)
}