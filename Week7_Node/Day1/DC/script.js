// Use the exported module in a script.js file.
const { largeNumber, currentDate } = require('./main')

// In the script.js file declare a variable const b = 5; and use it to output the sum of the imported module + b
const b = 5;

console.log(b + largeNumber);

// In the script.js file create a server using the http module (require('http')).
const http = require('http');

// Create a server instance and bind it at port 3000. Therefore your server should run on http://localhost:3000/. When the server run, you should console.log("I'm listening") in the terminal.

const server = http.createServer((req, res) => {
    // Set the response header to res.setHeader('Content-Type', 'text/html')(look at this tutorial- Part named “Serving HTML)
    res.setHeader('Content-Type', 'text/html')
    // Respond (res.end) with a HTML paragraph saying "My Module is <result from Part I>", and an HTML <h1> saying “Hi there at the frontend”
    res.end(`<p>My Module is ${b + largeNumber}</p><h1>Hi there at the frontend</h1>`)
})

server.listen(3000, () => {
    console.log("I'm listening on port 3000")
})


// Create a server with http and set the response header to 'text/html'. Respond with an HTML paragraph that outputs the current date and time from the exported module.
const anotherServer = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html')
    res.end(`<p>Time now is: ${currentDate.toLocaleString()}</p>`)
})

anotherServer.listen(8080, () => {
    console.log("I'm listening on port 8080")
})
// Your server should run on http://localhost:8080/


