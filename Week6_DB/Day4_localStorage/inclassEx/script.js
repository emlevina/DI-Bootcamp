// Create a JS file - Add the below array of objects inside your javascript file.
const products = [
    {
        id: 0,
        name: "Deluxe Bicycle",
        url: "https://image.shutterstock.com/image-photo/yellow-black-29er-mountainbike-thick-600w-1498702814.jpg",
        price: 499.98
    },
    {
        id: 1,
        name: "Super Deluxe bagpack",
        url: "https://image.shutterstock.com/image-photo/yellow-school-backpack-isolated-on-600w-534499549.jpg",
        price: 134.99
    },
    {
        id: 2,
        name: "Super Duper Scooter",
        url: "https://image.shutterstock.com/image-illustration/yellow-retro-vintage-scooter-isolated-600w-1421727647.jpg",
        price: 1090.95
    },
    {
        id: 3,
        name: "Smartphone",
        url: "https://image.shutterstock.com/image-vector/concept-touch-screen-smartphone-blank-600w-1433190200.jpg",
        price: 399.99
    }
];
// Using a self invoking function, and using the DOM - add the products to the page and make them clickable.
// MANDATORY --> add to each item an id and a class attribute.

class Product {
    constructor(obj) {
        this.el = document.createElement('div')
        this.id = obj.id
        this.price = obj.price
        this.name = obj.name
        this.el.classList.add('product')
        this.el.setAttribute('id', this.id)
        let price = document.createElement('p')
        price.append(this.price)
        let name = document.createElement('p')
        name.append(this.name)
        let img = document.createElement('img')
        img.setAttribute('src', obj.url)
        this.el.append(name, price, img)
        this.el.addEventListener('click', this.addToCart)
    }

    // made it arrow function to bind this to the class
    addToCart = (e) => {
        let currentLocal = JSON.parse(localStorage.getItem('cart')) || []
        console.log(currentLocal)
        if(currentLocal && currentLocal.some(obj => obj.id === this.id)){
            currentLocal = currentLocal.map(obj => {
                if(obj.id === this.id) obj.qt++
                return obj
            })
        } else {
            currentLocal.push({ id: this.id, price: this.price, name: this.name, qt: 1 })   
        }
        
        localStorage.setItem('cart', JSON.stringify(newLocal))
    }

    appendToRoot() {
        root.append(this.el)
    }
}

const root = document.getElementById('root')
products.forEach(obj => {
    let newProduct = new Product(obj)
    newProduct.appendToRoot()
})
// The user clicks on the item to add them to his cart. The cart is an array of items, saved in the localstorage.

// Each item is an object containing the name of the product and the price.
// For now, the user can add only 1 product per category (meaning 1 scooter, 1 bicycle ect...)
// Bonus: use a Class to create each item
// When the user is done with his shopping, he will click on the "Pay button" (which is actually an tag) and it will redirect him to another HTML page. 