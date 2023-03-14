export const logaction = store => next => action => {
    console.log(action)
    console.log('hello from middleware! prev age: ', store.getState())
    next(action)
}