// Create a server file, name it - serverExpress.js
// Use express to create a server. Return an HTML line of code (Use only HTML tags, no HTML files), for requests to the root URL (/).
const express = require('express')
const app = express()
app.listen(3000, ()=>{
    console.log('listening on 3000')
})

app.get('/', (req, res)=>{
    res.send('<h1>My express server!</h1>')
})
// Remember to use the GET method for the server route.
// Your server should run on http://localhost:3000/