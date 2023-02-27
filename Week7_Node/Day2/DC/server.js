const express = require('express');
const app = express();
const port = 3000;
app.listen(port, () => {
    console.log(`listening on port ${port}`);
})

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/form', express.static(__dirname + '/public'));
// The route /pic : displays an HTML file with a picture of your choice.
// The route /form : displays an HTML file.
app.use('/pic', express.static(__dirname + '/public/pic.html'));

app.get('/aboutMe/:hobby', (req, res) => {
    const hobby = req.params.hobby
    if (!isNaN(hobby) || !hobby) {
        // If the parameter is not a string (ie. numbers or else), set the status to 404.
        res.status(404)
    } else {
        // The route /aboutMe/:hobby: displays the name of one hobby (ie. the value of the route parameter).
        res.json({ hobby })
    }
})
// You should get the data and display it on the browser at the route /formData.
// For example, “john@gmail.com sent you a message “Love your new website”.
app.post('/formData', (req, res)=>{
    console.log(req.body)
    res.send(`<p>${req.body.email} sent you a message "${req.body.message}"</p>`)
})

// Requirements:
// The HTML file must be in the public folder.
// The HTML file must contain a form to contact you.
// The form must contain the inputs email and message. (add some HTML form validations)
// Output:
// You should get the data and display it on the browser at the route /formData.
// For example, “john@gmail.com sent you a message “Love your new website”.