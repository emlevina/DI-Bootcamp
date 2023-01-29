// Using Javascript:
// Retrieve the div and console.log it
console.log(document.querySelector('div'))

// Change the name “Pete” to “Richard”.
let allLi = Array.from(document.querySelectorAll('li'))
let peteNode = allLi.find(el => el.innerText === 'Pete')
console.log(peteNode)
peteNode.innerText = 'Richard'

// Change each first name of the two <ul>'s to your name.
let allUl = document.querySelectorAll('ul')
allUl.forEach(parent => parent.children[0].innerText = 'Ekaterina')

// Delete the <li> that contains the text node “Sarah”.
allLi.find(el => el.innerText === 'Sarah').remove()

// Bonus - Using Javascript:
// Add a class called student_list to both of the <ul>'s.
allUl.forEach(el => el.classList.add('student_list'))

// Add the classes university and attendance to the first <ul>.
allUl[0].classList.add('university', 'attendance')