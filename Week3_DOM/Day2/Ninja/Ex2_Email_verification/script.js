// We will create a form that ask the user for their email. Then, using a function we will check the validity of the user’s input.

// Add an input that has a type="email" to your form.
let input = document.getElementById('email')

const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.']
// Write your own javascript validation function to check if the entered value is a valid email address. The address should contain some valid characters, and the @ sign, more characters then a . (period) and some more characters.
const checkEmail = (e) => {
    e.preventDefault()
    let email = input.value
    let [ firstPart, domain ] = email.split('@')
    console.log(email)

    const compareWithArray = (string, stringName) => {
        string.split('').forEach((letter, index, array) => {
            if (!(alphabet.includes(letter))) {
                // check if all letters are valid
                console.log(`The symbol ${letter} in ${stringName} is incorrect`)
                return false
            } else if (letter === '.' && array[index + 1] === '.') {
                // check if there are no two or more dots in a row
                console.log(`Using two or more dots in a row in ${stringName} is incorrect`)
                return false
            }
        })
        return true
    }

    if (email.indexOf('@') === -1 || email.indexOf('@') !== email.lastIndexOf('@')) {
        // check if there is exactly one @ in the address
        console.log('no @ or more than 1 @')
        return
    } else if (firstPart.length < 1 || domain.length < 3) {
        // check if before/after @ are enough symbols
        console.log('no text before or after @')
        return
    } else if (domain.indexOf('.') < 1 || domain.lastIndexOf('.') >= domain.length - 1) {
        // check if there is at least one dot in the domain name and it's not in the last or first place
        console.log('no dot or the places of dots are not correct')
        return
    } else if (!compareWithArray(firstPart, 'first part') || !compareWithArray(domain, 'domain')) {
        return false
    } else {
        return true
    }


}

const checkEmailRegex = (e) => {
    e.preventDefault()
    let email = input.value
    let regex = /^[a-zA-Z0-9]+([\.][a-zA-Z0-9]+)*@([a-zA-Z]+[\.]){1,2}[a-zA-Z]+$/i
    if(email.match(regex)){
        console.log("all is OK")
    } else {
        console.log("something is not OK")
    }
}

// On “submit”, the validation function should run and validate the email address.
document.addEventListener('submit', checkEmail)
// Try to do this exercise twice : with and without regex.