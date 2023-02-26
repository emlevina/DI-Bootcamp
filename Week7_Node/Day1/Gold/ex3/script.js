
// In the file script.js display the result of the function created in date.js.
// (Example: the next holiday is in 30 days and 12:03:45 hours)
const whenIsTheHoliday = require('./date')

whenIsTheHoliday().then(res => console.log(res))
// Bonus : Try to find a node module to get the date of the holidays instead of hardcoding it.
