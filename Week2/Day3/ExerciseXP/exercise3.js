// Prompt the user for a number.
// Hint : Check the data type you receive from the prompt (ie. Use the typeof method)
let number = prompt('Please, eneter a number')
number = Number(number)
// While the number is smaller than 10 continue asking the user for a new number.
// Tip : Which while loop is more relevant for this situation?
while(number < 10){
    number = prompt('Please, eneter a new number')
}

alert('finally more than 10!')