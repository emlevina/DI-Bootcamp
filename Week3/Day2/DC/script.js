let nounInput = document.getElementById('noun')
let adjectiveInput = document.getElementById('adjective')
let personInput = document.getElementById('person')
let verbInput = document.getElementById('verb')
let placeInput = document.getElementById('place')

let allInputs = document.querySelectorAll('input')

let output = document.getElementById('story')
let shuffleButton = document.getElementById('shuffle')
let object = {}
let index = 0

const generateStory = (index) => {
    const { person, noun, place, verb, adjective } = object
    const stories = [
        `${person} had a ${adjective} mood. That's why ${person} took one ${noun} and went to the ${place}. ${person} wanted to ${verb} but couldn't`,
        `The ${noun} was lying on the table in the ${place}. ${person} had to ${verb} on this ${noun} . Rules are rules, take it or leave it`,
        `${person} was a ${adjective} warlord from ${place}, whose objective was to ${verb} by wiping out half of all life at every level, as ${person} believed its massive population would inevitably use up the ${noun}'s entire supply of resources and perish`
    ]

    if(index > stories.length - 1){
        index = index % stories.length
    }

    return stories[index]
}

const renderTheStory = (e) => {
    e.preventDefault()
    object = {
        noun: nounInput.value,
        adjective: adjectiveInput.value,
        person: personInput.value,
        verb: verbInput.value,
        place: placeInput.value,
    }

    if (object.noun && object.adjective && object.person && object.verb && object.place) {
        index = 0 | Math.random() * 3
        let story = generateStory(index)
        output.textContent = story
        allInputs.forEach(input => input.value = '')
    } else {
        alert('No empty fields allowed')
    }
}

const shuffleTheStory = () => {
    index++
    let story = generateStory(index)
    output.textContent = story
}

document.addEventListener('submit', renderTheStory)
shuffleButton.addEventListener('click', shuffleTheStory)