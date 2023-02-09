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
let userChoice
let compChoice
let computerBrain

const compPlayEasy = () => {
    console.log('i am not smart')
    return availableIds[Math.floor(Math.random() * availableIds.length)]
}

const compPlayHard = () => {
    const userPositions = getPositions(userChoice)
    const compPositions = getPositions(compChoice)

    if (!compPositions.length && !userPositions.length) {
        return 1
    } else if(!compPositions.length){
        return userPositions[0] === 5 ? 1 : 5
    } else if (compPositions.length == 1 && userPositions.length === 1) {
        return [2, 3, 6].includes(userPositions[0]) ? 7 : 3
    } else {
        const closeToWin = (positions) => {
            return  winCombos.filter(combo => {
                let counter = 0
                combo.forEach(id => positions.includes(id) ? counter++ : "")
                return counter === 2
            }).flat().filter(id => availableIds.includes(id))[0]
        }

        const userCloseToWin = closeToWin(userPositions)
        const compCloseToWin = closeToWin(compPositions)

        return compCloseToWin ? compCloseToWin : userCloseToWin ? userCloseToWin : availableIds[Math.floor(Math.random() * availableIds.length)]
    }
}

const restart = () => {
    allBoxes.forEach(box => box.innerHTML = '')
    field.addEventListener('click', showError)
    winmsg.style.visibility = 'hidden'
    btnRestart.style.visibility = 'hidden'
    togglePromptsView(false)
}

const finishGame = (player = '') => {
    allBoxes.forEach(box => box.removeEventListener('click', playRound))
    winmsg.innerText = player ? `${player.toUpperCase()} won!` : 'nobody won'
    winmsg.style.visibility = 'visible'
    btnRestart.style.visibility = 'visible'
}

const getPositions = (choice) => {
    return Array.from(allBoxes).reduce((acc, box) => {
        return box.innerText === choice ? [...acc, +box.id] : acc
    }, [])
}

const winCheck = (player) => {
    const positions = getPositions(player === 'user' ? userChoice : compChoice)
    for (let combo of winCombos) {
        if (combo.every(id => positions.includes(id))) {
            finishGame(player)
        }
    }
    if(!availableIds.length){
        finishGame()
    }
}

const oneMove = (player, e = 0) => {
    const boxId = player === 'user' ? +e.target.id : computerBrain()
    const box = document.getElementById(boxId)
    box.innerText = player === 'user' ? userChoice : compChoice
    availableIds = availableIds.filter(num => num !== boxId)
    box.removeEventListener('click', playRound)

    winCheck(player)
}

const playRound = (e) => {
    oneMove('user', e)
    oneMove('comp')
}

const play = () => {
    availableIds = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    computerBrain = radios.value === 'easy' ? compPlayEasy : compPlayHard
    allBoxes.forEach(box => box.addEventListener('click', playRound))
    if (userChoice === 'o') {
        oneMove('comp')
    }
}

const togglePromptsView = (toHide) => {
    const radioNode = radios.value === 'easy' ? radios[1] : radios[0]
    const display = toHide ? 'none' : 'initial'
    prompts.forEach(prompt => prompt.style.display = display)
    choicesText.forEach(prompt => prompt.style.display = toHide ? 'block' : 'none')

    userChoice === 'x' ? btnZero.style.display = display : btnCross.style.display = display

    radioNode.style.display = display
    document.querySelector(`label[for=${radioNode.id}]`).style.display = display
}

const makeChoice = (e) => {
    field.removeEventListener('click', showError)
    winmsg.style.visibility = 'hidden'
    userChoice = e.target.value
    compChoice = userChoice === 'x' ? 'o' : 'x'
    togglePromptsView(true)
    play()
}

const showError = () => {
    console.log('show error')
    winmsg.style.visibility = 'visible'
    winmsg.innerText = 'You should choose your symbol first'
}

btnZero.addEventListener('click', makeChoice)
btnCross.addEventListener('click', makeChoice)
btnRestart.addEventListener('click', restart)
field.addEventListener('click', showError)