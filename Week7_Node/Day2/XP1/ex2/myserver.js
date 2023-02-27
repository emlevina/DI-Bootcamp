const http = require('http')
const user = {
    firstname: 'John',
    lastname: 'Doe'
}

const server = http.createServer((req, res) => {
    console.log('Hello')
    res.end(JSON.stringify(user))
})

server.listen(8080, () => {
    console.log('run on port 8080')
})