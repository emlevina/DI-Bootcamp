// Using a method, take this array 
const array = [[1], [2], [3], [[[4]]], [[[5]]]]
//and modify it to look like this array: [1,2,3,[4],[5]].
const newArray = array.flat(2)
console.log(newArray)
// Bonus Try to do it on one line.
// Using a method, take this array 
const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];
// and modify it to look like this array: ["Hello young grasshopper!","you are","learning fast!"].
const newGreeting = greeting.map(subarr => subarr.join(" "))
console.log(newGreeting)
// Turn the greeting array into a string: ‘Hello young grasshopper you are learning fast!’.
const greetingString = greeting.reduce((acc, subarr) => acc + " " + subarr.reduce((acc, word) => acc + " " + word), '')
console.log(greetingString)
// Turn the trapped number 3 
const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]] 
// into: [3]
const untrapping = (array) => {
    if(typeof(array) === 'object'){
        let [x] = array
        return untrapping(x)
    } else {
        return [array]
    }
} 
const untrapped = untrapping(trapped)
const untrapped2 = trapped.flat(Infinity)
console.log(untrapped)
console.log(untrapped2)


