const express = require('express');
const app = express()

app.use('/', express.static(__dirname + '/public'))

app.get('/user', (req, res)=>{
    const user = {
        firstname: 'John',
        lastname: 'Doe'
    }
    res.json(user)
})

const port = 3000
app.listen(port, ()=>{
    console.log(`listening on port ${port}`)
})
