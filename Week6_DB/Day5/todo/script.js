document.addEventListener('submit', createTask)
const form = document.forms[0]
const name = form.elements.name
const desc = form.elements.description
const start = form.elements['start-time']
const end = form.elements['end-time']
let idCounter = 0

function createTask(e) {
    e.preventDefault()
    let currentLocal = JSON.parse(localStorage.getItem('todos')) || []
    currentLocal.push({
        name: name.value,
        description: desc.value,
        start: start.value,
        end: end.value,
        isCompleted: false,
        id: idCounter
    })
    localStorage.setItem('todos', JSON.stringify(currentLocal))
    idCounter++
}


const localDt = () => {
    let now = new Date()
    now.setMinutes(now.getMinutes() - now.getTimezoneOffset())
    now.setSeconds(0)       // remove seconds
    now.setMilliseconds(0) // remove milliseconds
    return now
}

start.valueAsNumber = localDt().valueOf()
end.valueAsNumber = localDt().valueOf()