// Create two functions. Each function should return a promise.
// The first function called makeAllCaps(), takes an array of words as an argument
const makeAllCaps = (words) => {
    return new Promise((resolve, reject) => {
        if (words.every(word => typeof (word) === 'string')) {
            resolve(words.map(word => word.toUpperCase()))
        } else {
            reject('cannot uppercase not strings')
        }
    })
}

const sortWords = (words) => {
    return new Promise((resolve, reject) => {
        if (words.length > 4) {
            resolve(words.sort())
        } else {
            reject('cannot sort such a short array')
        }
    })
}
// If all the words in the array are strings, resolve the promise. The value of the resolved promise is the array of words uppercased.
// else, reject the promise with a reason.
// The second function called sortWords(), takes an array of words uppercased as an argument
// If the array length is bigger than 4, resolve the promise. The value of the resolved promise is the array of words sorted in alphabetical order.
// else, reject the promise with a reason.

const someWords = ['sss', 'aaa', 'www', 'sdfsdf', 'mama']
const errorOne = [1, 'sdfsdf', 'sdf']
const errorTwo = ['sdfsdf', 'sdf']

makeAllCaps(errorTwo)
    .then(res => sortWords(res))
    .then(res => console.log(res))
    .catch(err => console.log(err))

//in this example, the catch method is executed
makeAllCaps([1, "pear", "banana"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result))
      .catch(error => console.log(error))

//in this example, the catch method is executed
makeAllCaps(["apple", "pear", "banana"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result))
      .catch(error => console.log(error))

//in this example, you should see in the console, 
// the array of words uppercased and sorted
makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result)) //["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
      .catch(error => console.log(error))