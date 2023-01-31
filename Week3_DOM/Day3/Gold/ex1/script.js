let root = document.getElementById('root')

const alphabet = 'abcdefghijklmnopqrstuvwxyz'

const onDragStart = (e) => {
    e.dataTransfer.setData("text/plain", e.target.id);
    console.log(e.target.id)
}

const onDragOver = (e) => {
    e.preventDefault(); 
    e.dataTransfer.dropEffect = "move";
}

const onDrop = (e) => {
    e.preventDefault();
    let data = e.dataTransfer.getData("text/plain");
    let draggedBox = document.getElementById(data)
    let left = e.clientX
    let top = e.clientY
    draggedBox.style.position = 'absolute'
    draggedBox.style.left = left - 25 + 'px'
    draggedBox.style.top = top - 35 + 'px'
    
}

for (let letter of alphabet) {
    let box = document.createElement('div')
    box.setAttribute('draggable', true)
    box.setAttribute('id', `box-${letter}`)
    box.classList.add('box')
    box.append(letter)
    root.append(box)
}

let allBoxes = document.querySelectorAll('.box')

allBoxes.forEach(box => {
    box.addEventListener('dragstart', onDragStart)
})


root.addEventListener('dragover', onDragOver)
root.addEventListener('drop', onDrop)
