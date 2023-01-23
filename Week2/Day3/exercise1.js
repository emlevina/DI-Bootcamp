const people = ["Greg", "Mary", "Devon", "James"];

// Part I - Review About Arrays
// Write code to remove “Greg” from the people array.
people.shift();
// Write code to replace “James” to “Jason”.
people[people.indexOf('James')] = 'Jason'
// Write code to add your name to the end of the people array.
people.push('Ekateria')
// Write code that console.logs Mary’s index. take a look at the indexOf method on Google.
console.log(people.indexOf('Mary'))
console.log(people)
// Write code to make a copy of the people array using the slice method.
let newPeople = people.slice(1, -1);
console.log(newPeople)
// The copy should NOT include “Mary” or your name.
// Hint: remember that now the people array should look like this const people = ["Mary", "Devon", "Jason", "Yourname"];
// Hint: Check out the documentation for the slice method

// Write code that gives the index of “Foo”. Why does it return -1 ?
console.log(people.indexOf('Foo'))
// Create a variable called last which value is the last element of the array.
let last = people[people.length - 1]
console.log(last)
// Hint: What is the relationship between the index of the last element in the array and the length of the array?

// Part II - Loops
// Using a loop, iterate through the people array and console.log each person.
for(person of people){
    console.log(person);
}
// Using a loop, iterate through the people array and exit the loop after you console.log “Jason” .
// Hint: take a look at the break statement in the lesson.
for(person of people){
    console.log(person);
    if(person === 'Jason'){
        break;
    }
}