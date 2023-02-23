document.addEventListener('submit', createTask)

function createTask(e) {
    e.preventDefault()
    const form = document.forms[0]
    const name = form.elements.name.value
    const description = form.elements.description.value
    const start = form.elements['start-time'].value
    const end = form.elements['end-time'].value
    let currentLocal = JSON.parse(localStorage.getItem('todos')) || []
    currentLocal.push({ name, description, start, end, isCompleted: false })
    localStorage.setItem('todos', JSON.stringify(currentLocal))
    let newUrl =  window.location.href.replace('index', 'view')
    console.log(newUrl)
    window.location.href = newUrl
}