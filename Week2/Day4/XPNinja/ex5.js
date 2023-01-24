// Write a JS function that takes an array and returns a new array with only unique elements.

// Example list=[1,2,3,3,3,3,4,5] newList = [1,2,3,4,5]
// Example list=[1,2,3,3,3,3,4,5] newList = [1,2,3,4,5]

function deleteDuplicates(array){
    let newArr = []
    array.forEach((item, index, array) => {
        if(array.indexOf(item) === index){
            newArr.push(item)
        }
    })
    console.log(newArr)
    return newArr
}

deleteDuplicates([1,2,3,3,3,3,4,5])