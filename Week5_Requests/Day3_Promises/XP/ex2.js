// Create a promise that resolves itself in 4 seconds and returns a “success” string.
const newPromise = new Promise((resolve, reject) => {
    setTimeout(resolve, 4000, 'success')
})
// How can you make your promise from part 1 shorter using Promise.resolve() and console.log “success”?
const newPromise2 = Promise.resolve('success')
// Add code to catch errors and console.log ‘Ooops something went wrong’.
newPromise.then(res => console.log(res)).catch(err => console.log('Ooops something went wrong'))
newPromise2.then(res => console.log(res)).catch(err => console.log('Ooops something went wrong'))