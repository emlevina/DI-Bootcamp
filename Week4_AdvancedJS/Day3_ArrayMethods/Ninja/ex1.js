const data = [
  {
    name: 'Butters',
    age: 3,
    type: 'dog'
  },
   {
    name: 'Cuty',
    age: 5,
    type: 'rabbit'
  },
  {
    name: 'Lizzy',
    age: 6,
    type: 'dog'
  },
  {
    name: 'Red',
    age: 1,
    type: 'cat'
  },
  {
    name: 'Joey',
    age: 3,
    type: 'dog'
  },
  {
    name: 'Rex',
    age: 10,
    type: 'dog'
  },
];
// Hint: Dog Years -> the dog’s age is the age multiplied by 7.

let total = 0;
// Use a loop to find the sum of all the dog’s ages in dog years.
for(let dog of data){
    total += dog.age * 7
}
console.log(total)
// Using the reduce() method, find the sum of all the dog’s ages in dog years.
const reducedTotal = data.reduce((acc, dog) => acc + dog.age * 7, 0)
console.log(reducedTotal)