const openedPockemons = []
let activePockemon = 0
const errorEl = document.getElementById('error')

const fetchData = async () => {
    const num = Math.random() * 1008 | 0
    const url = `https://pokeapi.co/api/v2/pokemon/${num}`
    try {
        const res = await fetch(url)
        if (res.ok) {
            const data = await res.json()
            const name = data.forms[0].name[0].toUpperCase() + data.forms[0].name.slice(1)
            const height = data.height + ' cm'
            const weight = data.weight + ' gr'
            const type = data.types[0].type.name
            const img = data.sprites.front_default
            console.log({ height, weight, name, type, img })
            return { name, num, height, weight, type, img }
        } else {
            throw new Error('Was not able to retrieve the data, check the URL');
        }
    } catch (error) {
        console.log(error)
        errorEl.style.display = 'flex'
    }

}

const openNewPockemon = async (e) => {
    e.preventDefault()
    errorEl.style.display = 'none'
    const loader = document.getElementById('loader')
    root.innerHTML = ''
    loader.style.display = 'flex'
    const pockemon = await fetchData()
    openedPockemons.push(pockemon)
    activePockemon = openedPockemons.length - 1
    loader.style.display = 'none'
    displayPockemon(pockemon)
}

const displayPockemon = (pockemon) => {
    const mapProperties = {
        num: 'Pokemon #', 
        height: 'Height: ', 
        weight: 'Weight: ', 
        type: 'Type: ',
    }
    const root = document.getElementById('root')
    root.innerHTML = ''
    for (let key in pockemon) {
        if (key === 'img') {
            const display = document.getElementById('display')
            display.innerHTML = ''
            const img = document.createElement('img')
            img.setAttribute('src', pockemon[key])
            display.append(img)
        } else if (key === 'name') {
            const h2 = document.createElement('h2')
            h2.append(`${pockemon[key]}`)
            root.append(h2)
        } else {
            const p = document.createElement('p')
            p.append(`${mapProperties[key]}${pockemon[key]}`)
            root.append(p)
        }

    }
}

const swipeLeft = () => {
    activePockemon > 0 ? activePockemon-- : activePockemon = openedPockemons.length - 1
    displayPockemon(openedPockemons[activePockemon])
}
const swipeRight = () => {
    activePockemon !== openedPockemons.length - 1 ? activePockemon++ : activePockemon = 0
    displayPockemon(openedPockemons[activePockemon])
}

const openBtn = document.getElementById('openBtn')
openBtn.addEventListener('click', openNewPockemon)
const leftBtn = document.getElementById('leftBtn')
leftBtn.addEventListener('click', swipeLeft)
const rightBtn = document.getElementById('rightBtn')
rightBtn.addEventListener('click', swipeRight)