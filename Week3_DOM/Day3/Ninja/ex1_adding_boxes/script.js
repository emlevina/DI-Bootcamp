let root = document.getElementById('root')


const addBox = () => {
    let box = document.createElement('div')
    box.classList.add('box')
    box.style.background = `#${(0 | Math.random()*16777215).toString(16)}`
    root.append(box)
}