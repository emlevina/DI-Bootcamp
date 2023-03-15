const express = require('express');
const {_getAllProducts, _getProductById, _insertProduct, _updateProduct, _deleteProduct, _getProductByQuery} = require('../controllers/products');

const router = express.Router();


router.get('/search', _getProductByQuery);
router.get('/', _getAllProducts);
router.get('/:id', _getProductById);
router.post('/', _insertProduct);
router.put('/:id', _updateProduct);
router.delete('/:id', _deleteProduct);

module.exports = router