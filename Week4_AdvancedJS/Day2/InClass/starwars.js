// NESTED FUNCTIONS
// Create a function named starWars that takes no parameter.
const startWars = () => {
    const characters = []

    const createCharacter = (fname, lname = 'Smith') => {
        characters.push({fname, lname})
    }

    const displayCharacter = () => {
        characters.forEach(char => console.log(`${char.fname} ${char.lname}`))
    }

    createCharacter('Anna', 'Juliani')
    createCharacter('Lady')
    displayCharacter()
}
// The function should declare a variable characters equal to an empty array
// In the startWars function, create a function named createCharacter. It receives two parameters, the first name and last name of a character. If the character doesn't have a last name, the default should be "Smith" and push it to the characters array.
// In the startWars function, create a function named displayCharacter should display in the body the fullname of the characters,
// Call the createCharacter function a few times inside the starWars function and call the displayCharacter function once

startWars()