const http = require('http')

const server = http.createServer((req, res) => {
    console.log('Hello')
    res.end(`<h1>Hello</h1><h2>There</h2><p>guys!</p>`)
})

server.listen(3000, () => {
    console.log('run on port 3000')
})