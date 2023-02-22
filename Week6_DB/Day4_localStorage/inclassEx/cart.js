class Cart {
    constructor(array) {
        this.array = array
        this.total = this.array ? this.array.reduce((acc, cur) => acc + cur.price * cur.qt, 0) : 0
        this.el = document.createElement('ul')
    }

    generateCartItems = () => {
        if(this.array){
            this.array.forEach((obj) => {
                let newLi = new CartItem(obj).li
                this.el.append(newLi)
            })
        }
    }

    addTotal = () => {
        this.el.append(`Total: ${this.total}`)
    }

    clear = () => {
        this.el.innerHTML = ''
        localStorage.removeItem('cart')
    }
}

class CartItem {
    constructor({ price, name, qt }) {
        this.li = document.createElement('li')
        let priceEl = document.createElement('p')
        priceEl.append(price)
        let nameEl = document.createElement('p')
        nameEl.append(name)
        let qtEl = document.createElement('p')
        qtEl.append(`Quantity: ${qt}`)
        this.li.append(nameEl, priceEl, qtEl)
    }
}

class SuccessMessage {
    constructor(){
        this.p = document.createElement('p')
        this.p.style.display = 'none'
        this.p.append(`Congrats!`)
        root.append(this.p)
    }

    show = () => {
        this.p.style.display = 'block'
    }

    hide = () => {
        this.p.style.display = 'none'
    }
}

const root = document.getElementById('root')
const submitBtn = document.getElementById('submit')
const cartArr = JSON.parse(localStorage.getItem('cart'))
const cart = new Cart(cartArr)
let msg = new SuccessMessage()
cart.generateCartItems()
cart.addTotal()
root.append(cart.el)

const onSubmit = (e) => {
    e.preventDefault()
    cart.clear()
    msg.show()
}

submitBtn.addEventListener('click', onSubmit)