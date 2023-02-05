// Write a JavaScript function to find a word within a string.

const search_word = (str, substr) => {
    let count = 0
    str.split(' ').forEach(element => {
        if(element.toLowerCase() === substr.toLowerCase()){
            count++
        }
    })
    return `'${substr}' was found ${count} time${count > 1 ? 's' : ''}`
    
}

console.log(search_word('The quick Fox and brown fox', 'fox')); 
"'fox' was found 1 times." 