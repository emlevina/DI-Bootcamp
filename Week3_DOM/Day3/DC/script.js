// Create an input type text that takes/shows only letters. (ie. numbers and special characters won’t be accepted)

// Hint: use one of the following events to remove any character that is not a letter

// keyup event
// or keypress event
// or keydown event
// or input event

// Hint : Check out keycodes in Javascript or Regular Expressions

let input = document.querySelector('input')
let error = document.querySelector('.error')
error.style.display = 'none'
error.classList.add('error')
error.textContent = 'You tried to enter not a letter!'

const validateInput = (e) => {
    let regex = /^[a-zA-Z]*$/i
    if(e.target.value.match(regex)){
        error.style.display = 'none'
    } else {
        e.target.value = e.target.value.slice(0, -1)
        error.style.display = 'block'
    }
}

input.addEventListener('input', validateInput)