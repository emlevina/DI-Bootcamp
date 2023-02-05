// Write a function called reverseArray which accepts an array and returns the array with all values reversed. See if you can do this without creating a new array!

const reverseArray = (array) =>{
    for(let i = 0; i < array.length/2; i++){
        let temp = array[i]
        array[i] = array[array.length - i -1]
        array[array.length - i -1] = temp
    }
    console.log(array)
    return array
}

// Examples:

   reverseArray([1,2,3,4,5]) // [5,4,3,2,1]
   reverseArray([1,2]) // [2,1]
   reverseArray([]) // []
   reverseArray([1,2,3,4,5,6,7,8,9,10]) // [10,9,8,7,6,5,4,3,2,1]