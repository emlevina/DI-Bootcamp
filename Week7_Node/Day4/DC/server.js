const express = require('express');
const { addUser, checkUser } = require('./controllers/users')
const app = express();

app.listen(3000, () => {
    console.log(`run on port 3000`);
})
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + '/public'))

app.post('/user', addUser)

app.get('/user/:email', checkUser)