// Create an array called colors where the value is a list of your five favorite colors.
let colors = ['pink', 'pale pink', 'bright pink', 'fuksia', 'black']
const suffixes = {
    1: 'st',
    2: 'nd',
    3: 'rd'
}
// Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
colors.forEach((color, i) => {
    console.log(`My ${i+1}${suffixes[i+1]||'th'} choice is ${color}`)
})
// Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
// Hint : create an array of suffixes to do the Bonus