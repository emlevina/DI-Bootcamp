const express = require('express');
const { products } = require('./modules/products');
// const cors = require('cors')


const app = express();
// app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use('/', express.static(__dirname + '/public'))

app.listen(5000, () => {
    console.log('run on port 5000');
})

app.get('/api/products', (req, res) => {
    res.json(products)
})
app.get('/api/products/:id', (req, res) => {
    const product = products.find(product => product.id == req.params.id)
    if(!product){
        return res.status(404).json({msg: 'not found'})
    }

    res.json(product)

})
app.get('/api/search', (req, res) => {
    const product = products.filter(product => {
        return product.name.toLowerCase().indexOf(req.query.name.toLowerCase()) !== -1
    })
    res.json(product)
})
app.post('/api/products', (req, res) => {
    products.push({...req.body, id: products.length + 20})
    res.status(200).json(products)
})