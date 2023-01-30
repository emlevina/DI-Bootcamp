// Add many events listeners to one element on your webpage. Use the click, mouseover, mouseout and dblclick events.
// Each listener should do a different thing, for instance - change position x, change position y, change color, change the font size… and more.

let h1 = document.querySelector('h1')
let h2 = document.querySelector('h2')
let h3 = document.querySelector('h3')
let p = document.querySelector('p')

const makeColorRed = (e) => {
    e.target.style.color = 'red'
}

const moveToRight = (e) => {
    let node = e.target
    node.style.marginLeft = '15px'
}

const moveBack = (e) => {
    let node = e.target
    node.style.marginLeft = '0'
}

const makeFont24px = (e) => {
    let node = e.target
    node.style.fontSize = '24px'
}

const makeBgBlue = (e) => {
    let node = e.target
    node.style.background = 'blue'
}

h1.addEventListener('mouseover', makeColorRed)
h2.addEventListener('mouseover', moveToRight)
h2.addEventListener('mouseout', moveBack)
h3.addEventListener('click', makeFont24px)
p.addEventListener('dblclick', makeBgBlue)