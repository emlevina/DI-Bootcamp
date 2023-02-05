// Using these arrays :

const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th", "st", "nd", "rd"];
// Write a JavaScript program that displays the colors in the following order : “1st choice is Blue .” “2nd choice is Green.” “3rd choice is Red.” ect…
colors.forEach((color, i) => {
    const pos = i + 1
    const ending = pos < 4 ? ordinal[pos] : ordinal[0]
    console.log(`#${pos}${ending} choice is ${color}`)
})
// Hint : Use the array methods taught in class and ternary operator.