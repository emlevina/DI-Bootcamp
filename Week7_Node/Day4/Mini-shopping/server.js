const express = require('express');
const app = express();
let itemsList = [];

app.listen(3000, ()=>{
    console.log(`listen on port 3000`);
})
app.use(express.urlencoded({extended: true}));
app.use(express.json())

app.use('/', express.static(__dirname + "/public"));

app.get('/items', (req, res)=>{
    res.json(itemsList)
})

app.post('/item', (req, res)=>{
    console.log(req.body)
    itemsList.push({id: itemsList.length, ...req.body})
    res.status(200).send(itemsList)
})