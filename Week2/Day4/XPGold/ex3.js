// Write a JavaScript function which takes a string as an argument and swaps the case of each character.
// For example :

// if you input 'The Quick Brown Fox' 
// the output should be 'tHE qUICK bROWN fOX'.
function swapper(string){
    let arr = []
    for(letter of string){
        if(letter === letter.toLowerCase()){
            arr.push(letter.toUpperCase())
        } else {
            arr.push(letter.toLowerCase())
        }
    }

    return arr.join('')
}

console.log(swapper('The Quick Brown Fox'))