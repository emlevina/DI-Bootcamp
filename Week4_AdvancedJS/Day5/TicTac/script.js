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
const intro = document.querySelector('.prompt')
const allBoxes = document.querySelectorAll('.box')
const winmsg = document.getElementById('winmsg')
const form = document.forms[0];
const radios = form.elements['difficulty'];
let availableIds
let userChoice
let compChoice
let computerBrain

/// осталось: чей первый ход? +
// для сложной логики - учитывать куда шагнул пользователь и блокировать его
// если первый шаг, то правильный первый шаг
// если выбирать из выигрышных то учитывать какие уже у компа
// выбрать режим +

const compPlayEasy = () => {
    console.log('i am not smart')
    return availableIds[Math.floor(Math.random() * availableIds.length)]
}

const compPlayHard = () => {
    console.log('i am smart')
    for (let combo of winCombos) {
        if (combo.every(id => availableIds.includes(id))) {
            return combo[0]
        } else {
            return availableIds[Math.floor(Math.random() * availableIds.length)]
        }
    }

}

const restart = () => {
    allBoxes.forEach(box => box.innerHTML = '')
    intro.style.visibility = 'visible'
    winmsg.style.visibility = 'hidden'
    btnRestart.style.visibility = 'hidden'
}

const finishGame = (winner) => {
    allBoxes.forEach(box => box.removeEventListener('click', playRound))
    winmsg.innerText = winner ? `${winner} won` : 'nobody won'
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
            return true
        }
    }
    return false
}

const oneMove = (player, e = 0) => {
    const boxId = player === 'user' ? +e.target.id : computerBrain()
    const box = document.getElementById(boxId)
    box.innerText = player === 'user' ? userChoice : compChoice
    availableIds = availableIds.filter(num => num !== boxId)
    box.removeEventListener('click', playRound)

    return winCheck(player)
}

const playRound = (e) => {
    oneMove('user', e) ? '' : availableIds.length ? oneMove('comp') : finishGame()
}

const start = () => {
    availableIds = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    allBoxes.forEach(box => box.addEventListener('click', playRound))
    computerBrain = radios.value === 'easy' ? compPlayEasy : compPlayHard
    if (userChoice === 'o') {
        oneMove('comp')
    }
}

const makeChoice = (e) => {
    userChoice = e.target.value
    compChoice = userChoice === 'x' ? 'o' : 'x'
    intro.style.visibility = 'hidden'
    start()
}

btnZero.addEventListener('click', makeChoice)
btnCross.addEventListener('click', makeChoice)
btnRestart.addEventListener('click', restart)