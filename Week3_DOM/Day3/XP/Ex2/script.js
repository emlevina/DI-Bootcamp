// In your Javascript file, use setInterval to move the <div id="animate"> to the right side of the <div id="container">, when the button is clicked on.
let box = document.getElementById('animate')
let container = document.getElementById('container')

let margin = 1; 
const myMove = () => {
    let intervalId = setInterval(() => {
        box.style.marginLeft = margin + 'px'
        if (margin >= 350) {
            clearInterval(intervalId)
        }
        margin++
    }, 10)
}

// The <div id="animate"> should move 1px to the right every milisecond, until it reaches the end of the <div id="container">.
// Hint : use clearInterval as soon as the box reaches the right end side of the container
// Hint : check out the demonstration in the Course Noted named JS Functions