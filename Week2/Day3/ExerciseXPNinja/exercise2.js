// Hint:
// - This Exercise is trickier then the others. You have to think about its structure before you start coding.
// - You must use functions to complete this exercise, to do so take a look at tomorrow’s lesson.

// In this exercise we will be creating a function which takes an array of grades as an argument and will console.log the average.
const grades = [77, 89, 99, 100]
const moreGrades =  [50, 25, 34, 60]

// Create a function called findAvg(gradesList) that takes an argument called gradesList.
const findAvg = (gradesList) => {
    let avg = 0
    for(grade of gradesList){
        avg += grade
    }
    avg /= gradesList.length
    console.log(avg)
    evaluateSuccess(avg)
}
// Your function must calculate and console.log the average.

// If the average is above 65 let the user know they passed
const evaluateSuccess = (avg) => {
    if(avg > 65){
        console.log("Success!")
    } else {
        console.log("You should take the course again")
    }
}
// If the average is below 65 let the user know they failed and must repeat the course.
// Bonus Try and split parts 1,2 and 3,4 of this exercise to two separate functions.
// Hint One function must call the other.

findAvg(grades)
findAvg(moreGrades)