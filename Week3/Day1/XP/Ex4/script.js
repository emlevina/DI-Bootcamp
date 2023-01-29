// In the js file, create an array called allBooks. This is an array of objects. Each object is a book that has 4 keys (ie. 4 properties) :
// title,
// author,
// image : a url,
// alreadyRead : which is a boolean (true or false).
const allBooks = [
    {
        title: 'The Zone',
        author: 'Dovlatov',
        image: 'https://m.media-amazon.com/images/I/51aQGEmvzKL._SY346_.jpg',
        alreadyRead: false
    },
    {
        title: 'Choice',
        author: 'Eva Eger',
        image: 'https://m.media-amazon.com/images/I/41OYPmbG8eL._SX329_BO1,204,203,200_.jpg',
        alreadyRead: true
    },
    {
        title: 'Shmyak the kitten',
        author: 'Rob Scotton',
        image: 'https://www.clever-media.ru/upload/iblock/a27/a274c9e90dc7681924d983e17a06652e.jpg',
        alreadyRead: false
    },
    {
        title: 'The 14 forest mice',
        author: 'Kazuo Iwamura',
        image: 'https://pictures.abebooks.com/isbn/9784494006182-us.jpg',
        alreadyRead: false
    }
]

// Initiate the array with 2 books of your choice (ie. Add manually 2 books objects in the array)
// Requirements : All the instructions below need to be coded in the js file:
// Using the DOM, render the books inside an HTML table (the HTML table must be added to the <div> created in part 1).
let table = document.createElement('table')
document.body.querySelector('div').appendChild(table)

allBooks.forEach(book => {
    let bookCard = document.createElement('div')
    let text = document.createElement('p')
    text.innerText = `"${book.title}" written by ${book.author}`
    let img = document.createElement('img')
    img.setAttribute('src', book.image)
    img.setAttribute('width', '100px')
    
    bookCard.append(img)
    bookCard.append(text)

    if(book.alreadyRead){
        bookCard.style.color = 'red'
    }
    table.appendChild(bookCard)
})
// For each book :
// You have to display the book’s title and the book’s author.
// Example: HarryPotter written by JKRolling.
// The width of the image has to be set to 100px.
// If the book is already read. Set the color of the book’s details to red