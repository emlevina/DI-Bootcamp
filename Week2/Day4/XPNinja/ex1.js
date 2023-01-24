// Get a random number between 1 and 100.
// Console.log all even numbers from 0 to the random number.
function getRandom(){
    let num = Math.random() * 100 + .5 | 0
    for(let i = 0; i <= num; i++){
        console.log(i)
    }
}

getRandom()