const express = require('express');
const axios = require('axios')
const app = express();

app.listen(3000, () => {
    console.log(`run on port 3000`)
})

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + '/public'))

app.get('/robots', (req, res) => {
    axios.get('https://jsonplaceholder.typicode.com/users')
        .then(data => {
            if (!req.query.search) {
                res.json(data.data)
            } else {
                const newData = data.data.filter(person => person.name.toLowerCase().includes(req.query.search.toLowerCase()))
                res.json(newData)
            }
        })
})