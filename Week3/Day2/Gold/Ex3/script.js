// Create an empty array. 
let shoppingList=[]
let root = document.getElementById('root')

// Create a form containing : a text input field and an “AddItem” button. Add this form to the DOM.
let form = document.createElement('form')
let input = document.createElement('input')
input.setAttribute('type', 'text')
let buttonAdd = document.createElement('button')
buttonAdd.textContent = 'Add Item'
form.append(input, buttonAdd)
root.append(form)

// Type what you need to buy in the text input field, then add the new item to the array as soon as you click on the “AddItem” button (Hint: create a function named addItem()).
const addItem = (e) => {
    e.preventDefault()
    shoppingList.push(input.value)
    console.log(shoppingList)
    input.value = ''
}


// Add a “ClearAll” button to the DOM, that when clicked on, should call the clearAll() function (see below).
let buttonClear = document.createElement('button')
buttonClear.textContent = 'Clear All'
root.append(buttonClear)

// Create a function named clearAll() that should clear out all the items in the shopping list.
const clearAll = (e) => {
    e.preventDefault()
    shoppingList = []
    console.log(shoppingList)
}

buttonAdd.addEventListener('click', addItem)
buttonClear.addEventListener('click', clearAll)
