let body = document.querySelector('body')
let css = document.querySelector('#css')
let color1 = document.querySelector('#color1')
let color2 = document.querySelector('#color2')
let button = document.querySelector('button')

console.log(button)

const callBack = () => {
    body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`
    css.textContent = body.style.background + ';'
}

const generateRandom = () => {
    color1.value = `#${(0 | Math.random()*16777215).toString(16)}`
    color2.value = `#${(0 | Math.random()*16777215).toString(16)}`
    callBack()
}

color1.addEventListener('input', callBack)
color2.addEventListener('input', callBack)
window.addEventListener('load', callBack)
button.addEventListener('click', generateRandom)