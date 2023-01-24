// John created a simple tip calculator to help calculate how much to tip when he and his family go to restaurants.

// Create a function named calculateTip() that takes no parameter.
function calculateTip() {
    // Inside the function, use prompt to ask John for the amount of the bill.
    let bill = prompt('Enter the amount of the bill, please')
    let tip = 0
    bill = Number(bill)
    
    if(bill < 50){
        // If the bill is less than $50, tip 20%.
        tip = bill * 0.2
    } else if (bill < 200) {
        // If the bill is between $50 and $200, tip 15%.
        tip = bill * 0.15
    } else { 
        // If the bill is more than $200, tip 10%.
        tip = bill * 0.1
    }
    // Console.log the tip amount and the final bill (bill + tip).
    console.log(tip, bill + tip)
}

// Call the calculateTip() function.
calculateTip()