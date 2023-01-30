// Add a click event listener to the <input type="button">. 
let button = document.querySelector('[type="button"]')
let select = document.querySelector('#colorSelect')

console.log(button, select)
// When clicked on, it should call a function named : removecolor() that removes the selected color from the dropdown list.
const removeColor = () => {
    let colorToDelete = select.options[select.selectedIndex]
    colorToDelete.remove()
}

button.addEventListener('click', removeColor)
