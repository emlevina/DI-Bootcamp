// Analyse the code below, and before executing it, predict the outcome of the last line.
// 17
const curriedSum = (a) => (b) => a + b
const add5 = curriedSum(5)
console.log(add5(12))