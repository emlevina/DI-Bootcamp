// Create an array which value is the planets of the solar system.
const planets = [
    { name: "Mercury", numOfMoons: 0 },
    { name: "Venus", numOfMoons: 0  },
    { name: "Earth", numOfMoons: 1  },
    { name: "Mars", numOfMoons: 2  },
    { name: "Jupiter", numOfMoons: 5  },
    { name: "Saturn", numOfMoons: 5  },
    { name: "Uranus", numOfMoons: 19  },
    { name: "Neptune", numOfMoons: 5  }
]
// For each planet in the array, create a <div> using createElement. This div should have a class named "planet".
let section = document.querySelector('section')
planets.forEach(planet => {
    let div = document.createElement('div')
    div.classList.add('planet', planet.name.toLowerCase())
    for(let i = 0; i < planet.numOfMoons; i++){
        let moonDiv = document.createElement('div')
        moonDiv.classList.add('moon')
        moonDiv.style.left = i * 10 + "px"
        div.appendChild(moonDiv)
    }
    section.appendChild(div)
})
// Each planet should have a different background color. (Hint: you could add a new class to each planet - each class containing a different background-color).
// Finally append each div to the <section> in the HTML (presented below).

// Bonus: Do the same process to create the moons.
// Be careful, each planet has a certain amount of moons. How should you display them?
// Should you still use an array for the planets ? Or an array of objects ?