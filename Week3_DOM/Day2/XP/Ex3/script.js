// Declare a global variable named allBoldItems.
let allBoldItems

// Create a function called getBold_items() that takes no parameter. This function should collect all the bold items inside the paragraph and assign them to the allBoldItems variable.
const getBold_items = () => {
    allBoldItems = document.querySelectorAll('strong')
} 

// Create a function called highlight() that changes the color of all the bold text to blue.
const highlight = () => {
    console.log('highlight')
    getBold_items()
    allBoldItems.forEach(item => {
        item.style.color = 'blue'
    });
}

// Create a function called return_normal() that changes the color of all the bold text back to black.
const return_normal = () => {
    allBoldItems.forEach(item => {
        item.style.color = 'black'
    });
}
// Call the function highlight() on mouseover (ie. when the mouse pointer is moved onto the paragraph), and the function return_normal() on mouseout (ie. when the mouse pointer is moved out of the paragraph). Look at this example
let p = document.querySelector('p')
p.addEventListener('mouseover', highlight)
p.addEventListener('mouseout', return_normal)