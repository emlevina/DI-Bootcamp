const pickedColor = document.getElementById('pickedColor')
const clear = document.getElementById('clear')
const reset = document.getElementById('reset')

let color;
let isMouseDown = false;

const pickColor = (e) => {
    color = e.target.id
    pickedColor.style.background = color
}

const generateColors = () => {
    const colorsPanel = document.getElementById('colorspanel')
    colorsPanel.innerHTML = ''
    
    for (let i = 0; i < 15; i++) {
        let colorBlock = document.createElement('div')
        colorBlock.classList.add('colorBlock')
        let newColor = `#${((Math.random() * 0xfffff * 100000).toString(16)).slice(0, 6)}`
        colorBlock.setAttribute('id', newColor)
        colorBlock.style.background = newColor
        colorsPanel.append(colorBlock)

        colorBlock.addEventListener('click', pickColor)
    }
}

const colorGridBlock = (e) => {
    if (color) {
        e.target.style.background = color
        console.log('picked')
    }
}

const generateBoard = () => {
    const board = document.getElementById('board')
    for (let i = 0; i < 2000; i++) {
        let gridBlock = document.createElement('div')
        gridBlock.classList.add('gridBlock')
        board.append(gridBlock)
    }
}

const resetGridBg = () => {
    const allGridBlocks = document.querySelectorAll('.gridBlock')
    allGridBlocks.forEach(gridBlock => gridBlock.style.background = '')
}

const resetColors = () => {
    generateColors()
}

generateColors()
generateBoard()

clear.addEventListener('click', resetGridBg)
reset.addEventListener('click', resetColors)
board.addEventListener('mousedown', (e) => { isMouseDown = true; colorGridBlock(e) })
board.addEventListener('mouseover', (e) => { if (isMouseDown) { colorGridBlock(e) } })
board.addEventListener('mouseup', () => { isMouseDown = false })