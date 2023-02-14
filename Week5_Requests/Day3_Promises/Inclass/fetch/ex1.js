// EXERCISE 1
// Create a function that takes in a single parameter and returns a new promise.
// Using setTimeout, after 5000 milliseconds, the promise will either resolve or reject.
// If the input is a string, the promise resolves with that same string uppercased.
// If the input is anything but a string it rejects with that same input.
// Use then to repeat the string twice use catch to console.log the error finally call a function that console.log ("congratulation")

const returnPromise = (param) => {

    const newPromise = new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(typeof(param) === 'string'){
                resolve(param.toUpperCase())
            } else {
                reject(param)
            }
        }, 5000)
    })

    return newPromise
}

returnPromise(23).then((res)=>{
    console.log(res)
    return res
}).then((res) => {
    console.log(res)
}).catch((err) => {
    console.log(err)
}).finally(()=>{
    console.log('congratulations!')
})
