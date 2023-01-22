// Using this array :

const fruits = ["Banana", "Apples", "Oranges", "Blueberries"];
// Remove Banana from the array.
let bananaIndex = fruits.indexOf('Banana')
fruits.splice(bananaIndex, bananaIndex + 1)
// Sort the array in alphabetical order.
fruits.sort()
// Add “Kiwi” to the end of the array.
fruits.push('Kiwi')
// Remove “Apples” from the array. Don’t use the same method as in part 1.
fruits.shift()
// Sort the array in reverse order. (Not alphabetical, but reverse the current Array i.e. [‘a’, ‘c’, ‘b’] becomes [‘b’, ‘c’, ‘a’])
fruits.reverse()
// At the end you should see this outcome:
// ["Kiwi", "Oranges", "Blueberries"]
console.log(fruits)