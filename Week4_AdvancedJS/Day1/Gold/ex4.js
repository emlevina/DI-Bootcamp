// Write a JavaScript function to concatenate a given string n times (default is 1).
const repeatByMe = (str, num = 1) => {
    let result = ''
    while(num){
        result += str
        num--
    }
    return result
}

console.log(repeatByMe('Ha!',3));