// Using this array 
const letters = ['x', 'y', 'z', 'z'];

// Use a for loop to get this output { x: 1, y: 1, z: 2 };
const obj = {}
for(let letter of letters){
    obj[letter] ? obj[letter]++ : obj[letter] = 1
}
console.log(obj)

// Use the reduce() method to get this output { x: 1, y: 1, z: 2 };
const obj2 = letters.reduce((acc, item) => {
    acc[item] ? acc[item]++ : acc[item] = 1
    return acc
}, {})
console.log(obj2)