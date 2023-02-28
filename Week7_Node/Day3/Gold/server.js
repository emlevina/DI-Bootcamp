const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;
let shoppingList = JSON.parse(fs.readFileSync('shoppingList.json', 'utf-8'))

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
})
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(__dirname + '/public'))

// Our application should have the following routes:
// GET /items - this should respond with a list of shopping items.
app.get('/items', (req, res)=>{
    res.json(shoppingList)
})

// GET /items/:id - this route should display a single item’s name and price
app.get('/items/:id', (req, res)=>{
    const id = +(req.params.id);
    const item = shoppingList.find(item=> item.id === id)
    if(!item){
        return res.status(404).json({msg: 'no such item'})
    }
    res.json(item)
})
// POST /item - this route should accept form data and add it to the shopping list. (ie. add it to the array)
app.post('/item', (req, res)=>{
    console.log(req.body)
    const updatedShoppingList = [...shoppingList, {id: shoppingList.length + 1, ...req.body}]
    fs.writeFileSync('shoppingList.json', JSON.stringify(updatedShoppingList))
    shoppingList = JSON.parse(fs.readFileSync('shoppingList.json', 'utf-8'))
    res.status(200).json(shoppingList)
})