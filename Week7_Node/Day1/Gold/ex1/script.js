const difference = require('./date')
const differenceInDays = Math.ceil(difference / (1000 * 3600 * 24));
const differenceInTime = new Date(difference % (1000 * 3600 * 24)).toISOString().slice(11,19) 

const result = `the 1st January is in ${differenceInDays} days and ${differenceInTime}`
console.log(result)