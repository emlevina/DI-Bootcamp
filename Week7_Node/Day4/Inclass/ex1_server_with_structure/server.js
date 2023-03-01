const express = require('express');
const dotenv = require('dotenv');
const products_router = require('./routes/products')

dotenv.config()
const app = express();
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use('/', express.static(__dirname + '/public'))

app.listen(process.env.PORT, () => {
    console.log(`run on port ${process.env.PORT}`);
})

app.use('/api/products', products_router)