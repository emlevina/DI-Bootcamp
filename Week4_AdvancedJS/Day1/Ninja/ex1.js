const menu = [
    {
        type: "starter",
        name: "Houmous with Pita"
    },
    {
        type: "starter",
        name: "Vegetable Soup with Houmous peas"
    },
    {
        type: "dessert",
        name: "Chocolate Cake"
    }
]

// Using an array method and ternary operator, check if at least one element in the menu array is a dessert.
console.log(menu.some(item => item.type === 'dessert'))

// Using an array method, check if all the elements in the array are starters.
console.log(menu.every(item => item.type === 'starter'))

// Using an array method, check if there is at least one element in the array that is a main course. If not, add a main course of your choice to the array.
if (!menu.some(item => item.type === 'main course')) {
    menu.push({ type: 'main course', name: "soup" })
}
console.log(menu)


// Using this array :

const vegetarian = ["vegetable", "houmous", "eggs", "vanilla", "potatoes"]
// Using an array method, add a key “vegetarian” (a boolean) to the menu array. The value of the key should be true if the name of the course contains at least one element from the vegetarian array.
menu.forEach(item => {
    item.name.split(' ').forEach(word => {
        if (vegetarian.includes(word.toLowerCase())) {
            item.vegetarian = true;
        }
    })
})

console.log(menu)