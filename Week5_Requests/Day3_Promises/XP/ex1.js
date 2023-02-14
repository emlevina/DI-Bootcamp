// Create a function called compareToTen(num) that takes a number as an argument.
const compareToTen = (num) => {
  let newPromise = new Promise((resolve, reject) => {
    if(num < 10){
      resolve(num)
    } else {
      reject(num)
    }
  })
  return newPromise
}
// The function should return a Promise:
// the promise resolves if the argument is less than 10
// the promise rejects if argument is greater than 10.
// Test:

//In the example, the promise should reject
compareToTen(15)
  .then(result => console.log(result))
  .catch(error => console.log('err', error))
//In the example, the promise should resolve
compareToTen(8)
  .then(result => console.log(result))
  .catch(error => console.log('err', error))