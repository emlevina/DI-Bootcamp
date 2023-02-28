const express = require('express');
const { products } = require('./modules/products');
const dotenv = require('dotenv')

dotenv.config()
const app = express();
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use('/', express.static(__dirname + '/public'))

app.listen(process.env.PORT, () => {
    console.log(`run on port ${process.env.PORT}`);
})
// CRUD - read
app.get('/api/products', (req, res) => {
    res.json(products)
})
app.get('/api/products/:id', (req, res) => {
    const product = products.find(product => product.id == req.params.id)
    if (!product) {
        return res.status(404).json({ msg: 'not found' })
    }

    res.json(product)

})
app.get('/api/search', (req, res) => {
    const product = products.filter(product => {
        return product.name.toLowerCase().indexOf(req.query.name.toLowerCase()) !== -1
    })
    res.json(product)
})

// CRUD - create
app.post('/api/products', (req, res) => {
    products.push({ ...req.body, id: products.length + 20 })
    res.status(200).json(products)
})

// CRUD - update
app.put('/api/products/:id', (req, res) => {
    const id = +req.params.id
    const index = products.findIndex(item => item.id === id)
    if (index === -1) {
        return res.status(404).json({ msg: 'Product not found' })
    }
    const updatedProduct = { ...products[index], ...req.body }
    products[index] = updatedProduct;
    res.status(200).json(products)
})
// CRUD - delete
app.delete('/api/products/:id', (req, res) => {
    const id = +req.params.id
    const index = products.findIndex(item => item.id === id)
    if(index !== -1){
        products.splice(index, 1)
        return res.status(200).json(products)
    }
    
    res.status(404).json(products)
})