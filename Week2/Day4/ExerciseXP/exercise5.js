// Create a function named changeEnough(itemPrice, amountOfChange) that receives two arguments :
// an item price
// and an array representing the amount of change in your pocket.
function changeEnough(itemPrice, amountOfChange) {
    let changeTotal = amountOfChange[0] * 0.25 + amountOfChange[1] * 0.1 + amountOfChange[2] * 0.05 + amountOfChange[3] * 0.01
    // In the function, determine whether or not you can afford the item.

    if (itemPrice <= changeTotal) {
        // If the sum of the change is bigger or equal than the item’s price, the function should return true
        return true
    } else {
        // If the sum of the change is smaller than the item’s price the function should return false   
        return false
    }

}
console.log(changeEnough(0.75, [0, 0, 20, 5])) // returns true
console.log(changeEnough(14.11, [2, 100, 0, 0])) // returns false