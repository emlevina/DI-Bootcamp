// Write a JavaScript function to remove: null, 0, "", false, undefined and NaN values from an array.

const removeFalsy = (array) => {
    return array.filter(item => item)
}

console.log(removeFalsy([1, 2, 3, null, 0, 5, 6, '', false, NaN, 9]))