const express = require('express');
app = express();

app.use('/', express.static(__dirname + '/public'));
app.listen(3000, ()=>{
    console.log(`listening on port 3000`)
})