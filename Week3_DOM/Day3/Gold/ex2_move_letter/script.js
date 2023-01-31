let root = document.getElementById('root')

let box = document.createElement('p')
box.setAttribute('draggable', true)
box.setAttribute('id', `para`)
box.classList.add('box')
box.append('Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque nostrum nam tempora doloremque impedit, ex nisi! Modi deleniti exercitationem ex quia tempore natus illo consequatur, earum unde, porro delectus soluta sit voluptatibus veritatis quidem sed at impedit. Repudiandae totam cupiditate maxime tenetur, error ullam sunt repellendus perspiciatis, eaque vel molestiae?')
root.append(box)

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
    draggedBox.style.marginLeft = left - 25 + 'px'
    draggedBox.style.marginTop = top - 35 + 'px'
    draggedBox.style.fontSize = 12 + (0 | top/20) + 'px'

}


box.addEventListener('dragstart', onDragStart)
document.addEventListener('dragover', onDragOver)
document.addEventListener('drop', onDrop)
