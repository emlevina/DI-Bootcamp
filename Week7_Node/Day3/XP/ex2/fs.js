const fs = require('fs');

fs.writeFile('message.txt', 'Hello Node.js', (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});

setTimeout(() => {
    fs.appendFile('message.txt', 'data to append', (err) => {
        if (err) throw err;
        console.log('The "data to append" was appended to file!');
    })
}, 1000)


setTimeout(() => {
    fs.unlink('message.txt', (err) => {
        if (err) throw err;
        console.log('successfully deleted message');
    })
}, 2000)