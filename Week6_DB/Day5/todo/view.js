
class Task {
    constructor({ name, description, start, end, id }) {
        this.id = id
        this.name = name
        this.description = description
        this.start = new Date(start)
        this.end = new Date(end)
        this.isCompleted = false
        this.el = document.createElement('div')
        this.p = document.createElement('p')
        this.checkbox = document.createElement('input')
        this.createDivContent()
        this.el.addEventListener('click', () => { this.p.classList.toggle('collapsed') })

        this.checkbox.addEventListener('click', (e) => {
            e.stopPropagation()
            this.el.classList.toggle('completed')
        })
    }

    countDaysLeft() {
        let today = new Date()
        let countingFrom = today.getTime() < this.start.getTime() ? this.start : today
        let difference = this.end.getTime() - countingFrom.getTime()
        let differenceInDays = Math.ceil(difference / (1000 * 3600 * 24));
        return differenceInDays
    }

    createDivContent() {
        this.el.classList.add('task')
        let h2 = document.createElement('h2')
        h2.append(`${this.name}`)
        this.p.append(`${this.description}`)
        this.p.classList.add('collapsed')
        let starting = document.createElement('small')
        starting.append(`Starting: ${this.start.toLocaleDateString("en-GB")}`)
        let caption = document.createElement('small')
        caption.append(`Days left: ${this.countDaysLeft()}`)
        let deleteBtn = document.createElement('span')
        deleteBtn.append('✖')
        let editBtn = document.createElement('span')
        editBtn.append('edit')
        let topBar = document.createElement('div')
        topBar.classList.add('topbar')
        topBar.append(this.checkbox, editBtn, deleteBtn)
        let bottomBar = document.createElement('div')
        bottomBar.classList.add('bottombar')
        bottomBar.append(starting, caption)
        this.checkbox.setAttribute('type', 'checkbox')
        this.el.append(topBar, h2, this.p, bottomBar)

        deleteBtn.addEventListener('click', (e) => {
            e.stopPropagation()
            let confirmed = confirm('Sure you want to delete this task?')

            if (confirmed) {
                this.el.remove()
                let currentLocal = JSON.parse(localStorage.getItem('todos'))
                currentLocal = currentLocal.filter(todo => todo.id !== this.id)
                localStorage.setItem('todos', JSON.stringify(currentLocal))
            }
        })

        editBtn.addEventListener('click', (e) => {
            e.stopPropagation()
            let newForm = document.createElement('form')
            let newInput = document.createElement('input')
            newInput.setAttribute('type', 'text')
            newInput.value = this.name
            newForm.classList.add('edit')
            newForm.append(newInput)
            this.el.append(newForm)
            newInput.addEventListener('click', (e) => { e.stopPropagation() })
            newForm.addEventListener('submit', (e) => {
                e.preventDefault()
                this.name = newInput.value
                let currentLocal = JSON.parse(localStorage.getItem('todos'))
                currentLocal = currentLocal.map(todo => {
                    todo.id === this.id ? todo.name = this.name : ''
                    return todo
                })
                localStorage.setItem('todos', JSON.stringify(currentLocal))
                newInput.value = ''
                newForm.remove()
                renderTask()
            })

        })
    }
}

const output = document.getElementById('output')


const renderTask = (e) => {
    output.innerHTML = ''
    const tasks = JSON.parse(localStorage.getItem('todos'))
    tasks && tasks.sort((a, b) => a.start > b.start ? 1 : -1).forEach(task => {
        const taskInstance = new Task(task)
        output.append(taskInstance.el)
    })
}

renderTask()
addEventListener('storage', renderTask);