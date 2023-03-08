const express = require('express');
const app = express();
const port = 3002;

// app.use('/', express.static(__dirname + '../client/build'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.get('/api/hello', (req, res)=>{
    res.json({msg: 'hello from express'})
})

app.post('/api/world', (req, res)=>{
    console.log(req.body)
    res.json({msg: `I received your POST request. This is what you sent me: ${req.body.post}`})
})

app.listen(port, ()=>{
    console.log(`Server listens on port ${port}`);
})