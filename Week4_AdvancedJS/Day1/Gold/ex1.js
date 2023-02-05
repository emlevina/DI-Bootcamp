// Write a JavaScript program to find the sum of all elements in an array.

const sumArray = (array) => {
    return array.reduce((prev, curr) => prev + curr, 0)
}