// In your Javascript file add the functionality which will allow you to drag the box and drop it into the target. Check out the Course Notes named DOM animations.
let box = document.getElementById('box')
let target = document.getElementById('target')

box.setAttribute('draggable', true)

target.addEventListener('dragenter', dragEnter)
target.addEventListener('dragover', dragOver)
target.addEventListener('dragleave', dragLeave)
target.addEventListener('drop', drop)

function dragEnter(e) {
    e.preventDefault(); 
}

function dragOver(e) {
    e.target.style.border = '1px solid blue'
    e.preventDefault()
}

function dragLeave(e) {
    e.target.style.border = 'none'
    e.preventDefault()
}

function drop(e) {
    e.target.appendChild(box);
    e.target.style.border = 'none'
}
