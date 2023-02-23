// In the JS file, create 2 functions : one to fetch data from API, the other one to display it on the page using the DOM
const output = document.getElementById('output')
const btn = document.getElementById('random')

const retrieveFact = async () => {
    const url = 'https://catfact.ninja/fact'
    try {
        let result = await fetch(url)
        if(result.ok){
            let data = await result.json()
            displayFact(data.fact)
        } else {
            throw new Error('Did not receive correct response from server')
        }
    } catch (error) {
        console.log(error)
    }
}

const displayFact = (text) => {
    output.textContent = text
}

btn.addEventListener('click', retrieveFact)