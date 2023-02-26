const http = require('http')

const server = http.createServer((req, res) => {
    console.log('Hello')
    res.end('Hello')
})

server.listen(5001, () => {
    console.log('run on port 5001')
})