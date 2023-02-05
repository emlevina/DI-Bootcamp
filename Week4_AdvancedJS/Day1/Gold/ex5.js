// Using this code :

const startLine = '     ||<- Start line';
let turtle = '🐢';
let rabbit = '🐇';
// Line up the Turtle and the Rabbit at the start line.

const moveToStart = () => {
    let moveAmt = startLine.length - startLine.trim().length + 4
    console.log(moveAmt)
    turtle = turtle.padStart(moveAmt)
    rabbit = rabbit.padStart(moveAmt)
}
// Expected Output:
//     When you write:
moveToStart()
console.log(startLine);
console.log(turtle);
console.log(rabbit);

//     It should look like this:

//     '     ||<- Start line'
//     '       🐢'
//     '       🐇'


// What happens when you run 
turtle = turtle.trim().padEnd(9, '=');

