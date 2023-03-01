const express = require('express');
const fs = require('fs');
const app = express();

app.listen(3000, ()=>{
    console.log(`run on port 3000`);
})
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(__dirname + '/public'))

app.post('/user', (req, res)=>{
    console.log(req.body)
    fs.readFile('database/users.json', 'utf-8', (err, data)=>{
        if(err) throw err
        let array = JSON.parse(data)
        // check if email exists - which error code?
        if(array.find(user => user.email === req.body.email)){
            res.status(422).send({msg: "Account exists"})
        } else {
            let newArray = [...array, {id: array.length+21, ...req.body}]
            fs.writeFile('database/users.json', JSON.stringify(newArray), (err, data)=>{
                if(err)throw err
                res.send({msg: "New account created"})
            })
        }
        
    })
})