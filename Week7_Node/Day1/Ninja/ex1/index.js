// Create an empty array called users. Tip: It’s an array of objects
const users = []
const { faker } = require('@faker-js/faker');

// Create a function that adds objects to the users array. Each user has the properties: name, address street and country. Use faker to populate them with fake data.
const addObjectsToUsers = () => {
    for(let i = 0; i < 50; i++){
        users.push({
            name: faker.name.fullName(),
            address: faker.address.street(),
            city: faker.address.city()
        })
    }
}

addObjectsToUsers()
console.log(users)

// Bonus : Find a node module that allows to prompt the user for his name, address street and country in order to add this information into the users array.