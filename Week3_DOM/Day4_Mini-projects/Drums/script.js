const root = document.querySelector('#root')
const letters = [
    ['A', 'Boom'],
    ['S', 'Clap'],
    ['D', 'Hihat'],
    ['F', 'Kick'],
    ['G', 'OpenHat'],
    ['H', 'Ride'],
    ['J', 'Snare'],
    ['K', 'Tink'],
    ['L', 'Tom']
]

const generateButtons = () => {
    for (let item of letters) {
        const [letter, text] = item
        let div = document.createElement('div')
        div.classList.add('box')
        div.setAttribute('id', letter)
        let h1 = document.createElement('h1')
        h1.append(letter)
        let p = document.createElement('p')
        p.append(text)
        div.append(h1, p)
        root.append(div)

        div.addEventListener('click', () => { makeSound(text.toLowerCase()) })
    }
}

const makeSound = (sound) => {
    console.log(sound)
    let mySound = new Audio(`sounds/${sound}.wav`)
    mySound.play()
}

const manageKeys = (e) => {
    let letter = e.code.slice(-1)
    if(letters.find(x => x[0] === letter)){
        makeSound(letters.find(x => x[0] === letter)[1].toLowerCase())
        let div = document.getElementById(letter)
        div.classList.add('active')

        setTimeout(()=>{
            div.classList.remove('active')
        }, 500)
    }
}

generateButtons()
document.addEventListener('keydown', manageKeys);