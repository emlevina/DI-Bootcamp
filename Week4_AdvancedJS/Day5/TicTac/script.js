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
    console.log(availableIds)

    // check available combos
    const userPositions = getPositions(userChoice)
    const filteredCombo = winCombos.filter(combo => combo.some(id => !userPositions.includes(id)))

    // need to check if I'm able to do any combo 

    // 
    const reduced = filteredCombo.reduce((acc, combo) => {
        // console.log('combo: ', combo)
        combo.forEach(id => {
            // console.log('id: ', id)
            if (availableIds.includes(id)) {
                acc[id] ? acc[id]++ : acc[id] = 1
                // console.log('acc: ',acc)
            }
        })
        return acc
    }, {})
    // const reducedReduced = Object.entries(reduced).reduce((acc, curr) => {
    //     return curr[1] > acc[1] ? curr : acc
    // }, [0, 0])[0]

    // const userPossibleCombo = 

    const reducedReduced = Math.max(Object.values(reduced))

    console.log(reducedReduced);
    return +reducedReduced
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
            return true
        }
    }
    return false
}

const oneMove = (player, e = 0) => {
    const boxId = player === 'user' ? +e.target.id : computerBrain()
    const box = document.getElementById(boxId)
    box.innerText = player === 'user' ? userChoice : compChoice
    console.log(`here I need to remove ${boxId} from the list`)
    availableIds = availableIds.filter(num => num !== boxId)
    box.removeEventListener('click', playRound)

    return winCheck(player)
}

const playRound = (e) => {
    oneMove('user', e) ? '' : !availableIds.length ? finishGame() : oneMove('comp')
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