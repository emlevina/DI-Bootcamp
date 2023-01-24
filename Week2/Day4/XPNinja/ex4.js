// Create a function called biggestNumberInArray(arrayNumber) that takes an array as a parameter and returns the biggest number.
// Note : This function should work with any array;
// Example:

const array = [-1,0,3,100, 99, 2, 99] ;// should return 100 
const array2 = ['a', 3, 4, 2]; // should return 4 
const array3 = []; // should return 0

function biggestNumberInArray(arrayNumber){
    let max;
    for(element of arrayNumber){
        if(typeof element === 'number' && (max < element || !max)){
            max = element
        }
    }
    return max | 0
}

console.log(biggestNumberInArray(array))
console.log(biggestNumberInArray(array2))
console.log(biggestNumberInArray(array3))