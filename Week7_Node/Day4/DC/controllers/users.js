const fs = require('fs');

const addUser = (req, res) => {
    fs.readFile('database/users.json', 'utf-8', (err, data) => {
        if (err) throw err
        let array = JSON.parse(data)
        if (array.find(user => user.email === req.body.email)) {
            res.status(422).send({ msg: "Account exists" })
        } else {
            let newArray = [...array, { id: array.length + 21, ...req.body }]
            fs.writeFile('database/users.json', JSON.stringify(newArray), (err, data) => {
                if (err) throw err
                res.send({ msg: "New account created" })
            })
        }
    })
}
const checkUser = (req, res) => {
    fs.readFile('database/users.json', 'utf-8', (err, data) => {
        if (err) throw err
        let array = JSON.parse(data)
        const user = array.find(user => user.email === req.params.email)
        if (user) {
            if (user.password === req.header("password")) {
                res.status(200).send({ msg: `Welcome, ${user.firstName}!` })
            } else {
                res.status(400).send({ msg: "Wrong password" })
            }
        } else {
            res.status(401).send({ msg: "Account doesn't exist" })
        }
    })
}

module.exports = {
    addUser,
    checkUser
}