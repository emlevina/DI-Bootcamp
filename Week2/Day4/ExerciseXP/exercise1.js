// Part I : function with no parameters

// Create a function called infoAboutMe() that takes no parameter.
function infoAboutMe(){
    console.log('My name is Ekaterina, I\'m 30 years')
}
// The function should console.log a sentence about you (ie. your name, age, hobbies ect…).
// Call the function.
infoAboutMe()
// Part II : function with three parameters

// Create a function called infoAboutPerson(personName, personAge, personFavoriteColor) that takes 3 parameters.
function infoAboutPerson(personName, personAge, personFavoriteColor){
    console.log(`Your name is ${personName}, you are ${personAge} years old and your favorite color is ${personFavoriteColor}`)
}
// The function should console.log a sentence about the person (ie. “You name is …, you are .. years old, your favorite color is …”)
// Call the function twice with the following arguments:
infoAboutPerson("David", 45, "blue")
infoAboutPerson("Josh", 12, "yellow")
