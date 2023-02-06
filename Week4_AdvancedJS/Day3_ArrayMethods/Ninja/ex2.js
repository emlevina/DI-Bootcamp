// Clean up this email to have no whitespaces. Do it in a single line (return a new string).
const userEmail3 = ' cannotfillemailformcorrectly@gmail.com '

let newEmail = userEmail3.trim()
console.log(newEmail)
let newEmailFiltered = userEmail3.split('').filter(i => i !== ' ').join('')
console.log(newEmailFiltered)