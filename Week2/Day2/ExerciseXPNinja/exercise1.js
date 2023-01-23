// Given the years two people were born, find the date when the younger one is exactly half the age of the older.
const findTheYear = (year1, year2) => {
    if(year1 > year2){
        return year1 - year2 + year1;
    } else if (year2 > year1){
        return year2 - year1 + year2;
    } else {
        return 'never'
    }
}

console.log(findTheYear(1994, 1994))
// Notes: The dates are given in the format YYYY