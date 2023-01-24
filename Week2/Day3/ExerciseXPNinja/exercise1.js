// Hint:
// - You must use functions to complete this exercise, to do so take a look at tomorrow’s lesson.

// Create two objects, each object should hold a person’s details. Here are the details:
// FullName
// Mass
// Height

let me = {
    fullName: "Ekaterina Orlova",
    mass: 61,
    height: 1.74,
    calcBMI() {
        return this.mass / (this.height*this.height)
    }
}

let anna = {
    fullName: "Anna Orlova",
    mass: 12.5,
    height: 1,
    calcBMI() {
        return this.mass / (this.height*this.height)
    }
}

// Each object should also have a key which value is a function (ie. A method), that calculates the Body Mass Index (BMI) of each person

// Outside of the objects, create a JS function that compares the BMI of both objects.
const compareBMIs = (person1, person2) => {
    return person1.calcBMI() > person2.calcBMI() ? person1.fullName : person2.fullName
}
// Display the name of the person who has the largest BMI.
console.log(compareBMIs(me, anna))
