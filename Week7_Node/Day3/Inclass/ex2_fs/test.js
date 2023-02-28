const fs = require('fs');

//sync
const data = fs.readFileSync('test.txt', 'utf-8')
console.log(data)

//async
fs.readFile('test.txt', 'utf-8', (err, data)=>{
    console.log(data)
})