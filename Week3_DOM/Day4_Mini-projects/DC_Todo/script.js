let tasks = []
// const submit = document.getElementById('submit')
const clear = document.getElementById('clear')
const input = document.getElementById('input')
const placeholder = document.getElementById('placeholder')
const list = document.querySelector('.listTasks')
let idCounter = 0


// Create a function named doneTask(), that as soon as the user clicks on the “checkbox” input, the done property should change from false to true in the object, and from black to crossed out red in the DOM.
const doneTask = (e) => {
    const parent = e.target.parentElement
    const id = Number(parent.dataset.taskId)
    const label = e.target.nextElementSibling
    label.classList.toggle('done')
    tasks.find(x => x["task_id"] === id).isDone = !tasks.find(x => x["task_id"] === id).isDone
}

// Create a function named deleteTask(), that as soon as the user clicks on the “X” button, delete that specific task from the array listTasks.
const deleteTask = (e) => {
    const parent = e.target.parentElement
    const id = Number(parent.dataset.taskId)
    parent.remove()
    tasks = tasks.filter(x => x["task_id"] !== id)
    if (tasks.length === 0) {
        placeholder.style.display = 'flex'
    }
}

const deleteAllTasks = () => {
    tasks = []
    list.innerHTML = ''
    placeholder.style.display = 'flex'
}


const addTask = (e) => {
    e.preventDefault()
    // check that the input is not empty,
    if (input.value) {
        if (tasks.length === 0) {
            placeholder.style.display = 'none'
        }
        // then add it to the array (ie. add the text of the task)
        // Change the variable tasks to an array of task objects.
        // Each new task added to the array should have the properties : task_id, text and done (a boolean - false by default).
        tasks.push({ task_id: idCounter, text: input.value, isDone: false })

        // then add it to the DOM, below the form (in the <div class="listTasks"></div>) .
        // Every new task object should have a task_id, starting from 0, and a data-task-id attribute, which value is the same as the task_id. Check out data-* attributes here.
        let newTask = document.createElement('div')
        newTask.setAttribute('data-task-id', idCounter)
        idCounter++
        // Each new task added should have (starting from left to right - check out the image at the top of the page)
        // a “X” button. Use font awesome for the “X” button.
        let close = document.createElement('i')
        close.classList.add('fa-solid', 'fa-poo')
        close.addEventListener('click', deleteTask)

        // an input type="checkbox".
        let checkBox = document.createElement('input')
        checkBox.setAttribute('type', 'checkbox')
        checkBox.setAttribute('id', `label${idCounter}`)
        checkBox.addEventListener('change', doneTask)

        // The label of the input is the task added by the user.
        let label = document.createElement('label')
        label.setAttribute('for', `label${idCounter}`)
        label.textContent = input.value


        newTask.append(close)
        newTask.append(checkBox)
        newTask.append(label)
        list.append(newTask)

        input.value = ''
    }

}

document.addEventListener('submit', addTask)
clear.addEventListener('click', deleteAllTasks)