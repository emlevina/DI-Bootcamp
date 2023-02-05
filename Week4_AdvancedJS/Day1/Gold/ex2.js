// Write a JavaScript program to remove duplicate items in an array.

const removeDuplicates = (array) => {
    return array.filter((item, index, arr)=> arr.indexOf(item) === index)
}

console.log(removeDuplicates([1, 1, 2, 4, 5, 4, 1]))