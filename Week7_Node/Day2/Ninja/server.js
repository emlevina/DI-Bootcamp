const express = require('express');
const app = express();
const shoppingList = [{id: 1, name: 'potato'}, {id: 2, name: 'apple'}];
const port = 3000;

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
})
app.use(express.urlencoded({extended: true}));
app.use(express.json());

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
    shoppingList.push({...req.body, id: shoppingList.length + 1})
    res.status(200).json(shoppingList)
})