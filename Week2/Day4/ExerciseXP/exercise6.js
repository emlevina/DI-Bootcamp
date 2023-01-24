// Let’s create functions that calculate your vacation’s costs:

// Define a function called hotelCost().
function hotelCost(nights) {
    // The hotel costs $140 per night. The function should return the total price of the hotel.
    return nights * 140
}

// Define a function called planeRideCost().
function planeRideCost(destination) {
    // The function should return a different price depending on the location.
    // “London”: 183$
    // “Paris” : 220$
    // All other destination : 300$

    switch (destination) {
        case 'london': return 183;
        case 'paris': return 220;
        default: return 300;
    }
}

// Define a function called rentalCarCost().
function rentalCarCost(days) {
    // Calculate the cost to rent the car. The car costs $40 everyday.
    // If the user rents a car for more than 10 days, they get a 5% discount.
    // The function should return the total price of the car rental.
    return days > 10 ? 40 * days * 0.95 : 40 * days
}

// Define a function called totalVacationCost() that returns the total cost of the user’s vacation by calling the 3 functions that you created above.
function totalVacationCost() {
    // It should ask the user for the number of nights they would like to stay in the hotel.
    let nights = prompt('How many nights you want to stay in the hotel?')
    // If the user doesn’t answer or if the answer is not a number, ask again.
    while (!Number(nights) || Number(nights) < 0) {
        nights = prompt('How many nights you want to stay in the hotel? Answer with a number')
    }

    // It should ask the user for their destination.
    let destination = prompt('Where would you like to go?')
    // If the user doesn’t answer or if the answer is not a string, ask again.
    while (!destination || Number(destination)) {
        destination = prompt('I\'m asking! Where would you like to go?')
    }

    // It should ask the user for the number of days they would like to rent the car.
    let days = prompt('How many days you want to rent a car?')
    // If the user doesn’t answer or if the answer is not a number, ask again.
    while (!Number(days) || Number(days) < 0) {
        days = prompt('How many days you want to rent a car? Answer with a number')
    }

    return rentalCarCost(Number(days)) + planeRideCost(destination.toLowerCase()) + hotelCost(Number(nights))
}
// Example : The car cost: $x, the hotel cost: $y, the plane tickets cost: $z.
// Hint: You have to call the functions hotelCost(), planeRideCost() and rentalCarCost() inside the function totalVacationCost().

// Call the function totalVacationCost()
totalVacationCost()

// Bonus: Instead of using a prompt inside the 3 first functions, only use a prompt inside the totalVacationCost() function. You need to change the 3 first functions, accordingly.