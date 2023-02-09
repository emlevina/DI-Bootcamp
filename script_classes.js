const winCombos = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [7, 5, 3]
]

const btnZero = document.getElementById('zero')
const btnCross = document.getElementById('cross')
const btnRestart = document.getElementById('restart')
const prompts = document.querySelectorAll('.text-prompt')
const choicesText = document.querySelectorAll('.users-choice')
const allBoxes = document.querySelectorAll('.box')
const winmsg = document.getElementById('winmsg')
const form = document.forms[0];
const radios = form.elements['difficulty'];
const field = document.querySelector('.field')
let availableIds


class Player {
    #choice

    constructor(name) {
        this.name = name
        this.#choice
        if (this.name === 'comp') {
            this.computerBrain = radios.value === 'easy' ? this.compPlayEasy : this.compPlayHard
            this.opponent
        }

    }

    set choice(choice) {
        if (choice === 'x' || choice === 'o') {
            this.#choice = choice
        } else {
            console.log('error')
        }
    }

    get choice() {
        return this.#choice
    }

    oneMove = (e = 0) => {
        // debugger
        const boxId = this.name === 'user' ? +e.target.id : this.computerBrain()
        const box = document.getElementById(boxId)
        box.innerText = this.#choice
        availableIds = availableIds.filter(num => num !== boxId)
        box.removeEventListener('click', this.playRound)
        return box
    }

    winCheck = () => {
        const positions = this.getPositions()
        for (let combo of winCombos) {
            if (combo.every(id => positions.includes(id))) {
                return true
            }
        }
        return false
    }

    getPositions = () => {
        return Array.from(allBoxes).reduce((acc, box) => {
            return box.innerText === this.#choice ? [...acc, +box.id] : acc
        }, [])
    }

    compPlayEasy = () => {
        // console.log('i am not smart')
        return availableIds[Math.floor(Math.random() * availableIds.length)]
    }

    compPlayHard = () => {
        // debugger;
        const userPositions = this.opponent.getPositions()
        const compPositions = this.getPositions()

        if (!compPositions.length && !userPositions.length) {
            return 1
        } else if (!compPositions.length) {
            return userPositions[0] === 5 ? 1 : 5
        } else if (compPositions.length == 1 && userPositions.length === 1) {
            return [2, 3, 6].includes(userPositions[0]) ? 7 : 3
        } else {
            const closeToWin = (positions) => {
                return winCombos.filter(combo => {
                    let counter = 0
                    combo.forEach(id => positions.includes(id) ? counter++ : "")
                    return counter === 2
                }).flat().filter(id => availableIds.includes(id))[0]
            }
            // console.log(compPositions)
            const nextSecond = winCombos.filter(combo => {
                return combo.some(id => compPositions.includes(id)) && combo.every(id => !userPositions.includes(id))
            }).flat().filter((id, i, arr) => availableIds.includes(id) && arr.indexOf(id) != i)[0]

            // console.log(nextSecond)
            const userCloseToWin = closeToWin(userPositions)
            const compCloseToWin = closeToWin(compPositions)

            return compCloseToWin ? compCloseToWin : userCloseToWin ? userCloseToWin : nextSecond ? nextSecond : availableIds[Math.floor(Math.random() * availableIds.length)] 
        }
    }
}

class Game {
    constructor() {
        this.user
        this.comp
    }

    addEventListeners = () => {
        btnZero.addEventListener('click', this.makeChoice)
        btnCross.addEventListener('click', this.makeChoice)
        btnRestart.addEventListener('click', this.restart)
        field.addEventListener('click', this.showError)
    }

    restart = () => {
        allBoxes.forEach(box => box.innerHTML = '')
        field.addEventListener('click', this.showError)
        btnZero.addEventListener('click', this.makeChoice)
        btnCross.addEventListener('click', this.makeChoice)
        winmsg.style.visibility = 'hidden'
        btnRestart.style.visibility = 'hidden'
        this.togglePromptsView(false)
    }

    finishGame = (player = '') => {
        allBoxes.forEach(box => box.removeEventListener('click', (e) => playRound(e, user, comp)))
        winmsg.innerText = player ? `${player.toUpperCase()} won!` : 'Draw'
        winmsg.style.visibility = 'visible'
        btnRestart.style.visibility = 'visible'
    }


    togglePromptsView = (toHide) => {
        const radioNode = radios.value === 'easy' ? radios[1] : radios[0]
        const display = toHide ? 'none' : 'initial'
        prompts.forEach(prompt => prompt.style.display = display)
        choicesText.forEach(prompt => prompt.style.display = toHide ? 'block' : 'none')

        this.user.choice === 'x' ? btnZero.style.display = display : btnCross.style.display = display

        radioNode.style.display = display
        document.querySelector(`label[for=${radioNode.id}]`).style.display = display
    }

    playRound = (e) => {
        this.user.oneMove(e).removeEventListener('click', this.playRound)
        if (this.user.winCheck()) {
            this.finishGame(this.user.name)
            return
        }
        if (!availableIds.length) {
            this.finishGame()
            return
        }

        this.comp.oneMove().removeEventListener('click', this.playRound)
        if (this.comp.winCheck()) {
            this.finishGame(this.comp.name)
            return
        }
        if (!availableIds.length) {
            this.finishGame()
            return
        }
    }

    play = () => {
        availableIds = [1, 2, 3, 4, 5, 6, 7, 8, 9]

        allBoxes.forEach(box => box.addEventListener('click', this.playRound))
        if (this.user.choice === 'o') {
            this.comp.oneMove()
        }
    }

    makeChoice = (e) => {
        field.removeEventListener('click', this.showError)
        btnZero.removeEventListener('click', this.makeChoice)
        btnCross.removeEventListener('click', this.makeChoice)
        winmsg.style.visibility = 'hidden'

        this.user = new Player('user')
        this.comp = new Player('comp')
        this.comp.opponent = this.user
        this.user.choice = e.target.value
        this.comp.choice = this.user.choice === 'x' ? 'o' : 'x'
        this.togglePromptsView(true)
        this.play()
    }

    showError = () => {
        console.log('show error')
        winmsg.style.visibility = 'visible'
        winmsg.innerText = 'You should choose your symbol first'
    }
}

const newGame = new Game()
newGame.addEventListeners()