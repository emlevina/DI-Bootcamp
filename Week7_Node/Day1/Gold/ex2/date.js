// In a new file called date.js, create a function that accepts a birthdate as an argument (in the format of your choice), and then return the number of minutes the user lived in his life. Export this function.
const yourLifeInMinutes = (str) => {
    let bd = new Date(str)
    if(bd instanceof Date && bd.getTime()){
        const minutes =  bd.getTime() / (1000 * 60)
        return minutes
    } else {
        console.log('It seems that your birthday is in a wrong format')
    }
    
}

module.exports = yourLifeInMinutes;