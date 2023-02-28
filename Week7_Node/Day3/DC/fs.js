const fs = require('fs');

fs.readFile('RightLeft.txt', 'utf-8', (err, data)=>{
    if(err) throw err
    let result2;
    const result = data.split('').reduce((acc, item, index) => {
        if(!result2 && acc === -1){
            result2 = index;
        }
        item === '>' ? acc++ : acc--
        
        return acc
    }, 0)
    console.log(result >= 0 ? `${result} steps to the right` : `${-result} steps to the left`)
    console.log(`${result2} steps to reach position -1`)
})