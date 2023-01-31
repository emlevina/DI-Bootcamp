// Part I
// In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will alert “Hello World”.
setTimeout(() => { alert('Hello world') }, 2000)

// Part II
// In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
let div = document.querySelector('#container')

setTimeout(() => {
    let p = document.createElement('p')
    p.append('Hello World')
    div.append(p)
}, 2000)


// Part III
// In your Javascript file, using setInterval, call a function every 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
let intervalId = setInterval(() => {
    let p = document.createElement('p')
    p.append('Hello World')
    div.append(p)
    if(div.childNodes.length === 5){
        clearInterval(intervalId)
    }
}, 2000)

// The interval will be cleared (ie. clearInterval), when the user will click on the button.
let clear = document.querySelector('#clear')
clear.addEventListener('click', () => { clearInterval(intervalId) })

// Instead of clicking on the button, the interval will be cleared (ie. clearInterval) as soon as there will be 5 paragraphs inside the <div id="container">.