// In the server.js file, create your server using express.
const express = require('express');
const app = express();
// Create a route /, and use a GET request method.
// The path of the route should contain the route parameter id. Check out the lesson named Express Routes & Queries in the Course Notes.
app.get('/:id', (req, res) => {
    const id = req.params.id

    // The handler function of the route should respond with the value of the route parameter. Check out req.params.
    res.json({ id })
})

// Run on port http://localhost:3000/ and add an id, for example http://localhost:3000/1234
const port = 3000
app.listen(port, () => {
    console.log(`listening on port ${port}`)
})
// The response on the page and on the console, should be a JSON Object
