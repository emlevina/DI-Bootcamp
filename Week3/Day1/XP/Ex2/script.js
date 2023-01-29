// Add a “light blue” background color and some padding to the <div>.
let div = document.body.children[0]
console.log(div)
div.style.backgroundColor = 'lightblue'

// Do not display the <li> that contains the text node “John”.
let allLi = Array.from(document.querySelectorAll('li'))
let johnNode = allLi.find(el => el.innerText === 'John')
johnNode.style.display = 'none'

// Add a border to the <li> that contains the text node “Pete”.
let peteNode = allLi.find(el => el.innerText === 'Pete')
peteNode.style.border = '1px solid black'

// Change the font size of the whole body.
document.body.style.fontSize = '10px'

// Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div).
if (div.style.backgroundColor == 'lightblue'){
    alert(`Hello ${allLi[0].innerText} and ${allLi[1].innerText}`)
}
