let num = prompt('Please, enter a number')
let i = 1

while (num > 0) {
    let numToTake = i < num ? i : num
    let leftOnTheWall = num > i ? num - i : 0

    function bottleEnd(num) {
        return `${num} bottle${num <= 1 ? '' : 's'}`
    }

    console.log(`
            ${bottleEnd(num)} of beer on the wall
            ${bottleEnd(num)} of beer
            Take ${numToTake} down, pass ${numToTake === 1 ? `it` : `them`} around
            ${bottleEnd(leftOnTheWall)} of beer on the wall
    `)

    num -= i
    i++
}