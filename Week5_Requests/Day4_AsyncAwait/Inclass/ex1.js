// Exercise Game - The word game You need to create 4 functions, each of them return a promises
// The 1st function, receives 2 famous persons name from the user - if the names are not a string -> reject else - resolve with the name of the 2 ppl in an array
const receiveFamousPeople = async () => {
    let people = prompt('Enter 2 people separated with comma')
    let [person1, person2] = people.split(',')

    if (isNaN(+person1) && isNaN(+person2)) {
        return [person1.trim(), person2.trim()]
    } else {
        throw new Error('Some of the peoples name is not a string')
    }

}
// The 2nd function, receives a noun if the noun is less than 3 letters - reject else - resolve with the noun
const receiveNoun = async () => {
    let noun = prompt('Enter a noun')

    if (noun.length > 3) {
        return noun
    } else {
        throw new Error('The noun is not long enough')
    }

}

// The 3rd function, receives a city if the city doesn't start with an uppercase letter -> reject else - resolve with the city name
const receivePlace = async () => {
    let place = prompt('Enter a place')

    if (place[0].toUpperCase() === place[0]) {
        return place
    } else {
        throw new Error('Place does not have an uppercased 1st letter')
    }

}
// The 4st function, receives a verb (finishing with "ing") if it doesn't end with "ing" -> reject (use the endWith string method) else resolve with the verb
const receiveVerb = async () => {
    let verb = prompt('Enter a verb')

    if (verb.slice(-3) === 'ing') {
        return verb
    } else {
        throw new Error('Verb is not ending with -ing')
    }
}
// The last function, is an async function - it receives all the above promises, and return a sentence with it Ex: "Beyonce is playing football with Barack Obama in Paris"

const makeSentence = async () => {
    try {
        const [person1, person2] = await receiveFamousPeople()
        const noun = await receiveNoun()
        const place = await receivePlace()
        const verb = await receiveVerb()

        return `${person1} is ${verb} ${noun} with ${person2} in ${place}`
    } catch (error) {
        console.log(error)
    }
}

makeSentence()