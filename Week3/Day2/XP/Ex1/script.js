// Using a DOM property, retrieve the h1 and console.log it.
let h1 = document.querySelector('h1')
console.log(h1)

// Using DOM methods, remove the last paragraph in the <article> tag.
let article = document.querySelector('article')
article.lastElementChild.remove()

// Add a event listener which will change the background color of the h2 to red, when it’s clicked on.
let h2 = document.querySelector('h2')
h2.addEventListener('click', function(){
    h2.style.background = 'red'
})

// Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).
let h3 = document.querySelector('h3')
h3.addEventListener('click', function(){
    h3.style.display = 'none'
})

// Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.
let button = document.querySelector('button')
button.addEventListener('click', function(){
    let allP = document.querySelectorAll('p')
    allP.forEach(p => p.style.fontWeight = 'bold')
})

// BONUS : When you hover on the h1, set the font size to a random pixel size between 0 to 100.(Check out this documentation)
h1.addEventListener('mouseover', function(){
    h1.style.fontSize = (0 | (Math.random() * 100 )) + 'px'
})

// BONUS : When you hover on the 2nd paragraph, it should fade out (Check out “fade css animation” on Google)
h2.addEventListener('mouseover', function(){
    h2.style.opacity = 0
    h2.style.transition = '2s'
})

h2.addEventListener('mouseleave', function(){
    h2.style.opacity = 1
    h2.style.transition = '1s'
})