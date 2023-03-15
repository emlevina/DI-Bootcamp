const { db } = require('../config/db');

const getAllProducts = () => {
    return db('products')
        .select('id', 'name', 'price')
        .orderBy('name');
}

const getProductById = (pid) => {
    return db('products')
        .select('id', 'name', 'price')
        .where({ id: pid })
}

const getProductByQuery = (query) => {
    return db('products')
        .select('id', 'name', 'price')
        .whereILike('name', `%${query}%`)
}

const insertProduct = (product) => {
    return db('products')
        .insert(product)
        .returning('*')
}

const updateProduct = (pid, product) => {
    return db('products')
        .update(product)
        .where({ id: pid })
        .returning('*')
}

const deleteProduct = (pid) => {
    return db('products')
        .del()
        .where({ id: pid })
        .returning('*')
}

module.exports = {
    getAllProducts,
    getProductById, 
    getProductByQuery,
    insertProduct, 
    updateProduct, 
    deleteProduct
}