const express = require('express');
const app = express();
const port = 3001;


app.use(express.urlencoded({extended: true}));
app.use(express.json())
app.listen(port, ()=>{
    console.log(`listening on port ${port}`)
})

app.post('/', (req, res)=>{
    console.log(req.body)
    res.send(`<h1>THank you ${req.body.name}, we received your info</h1><br>${JSON.stringify(req.body)}`)
})