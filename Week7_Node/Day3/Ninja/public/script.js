class Robot {
    constructor({ id, name, email }) {
        this.id = id
        this.name = name
        this.email = email
        this.image = `https://robohash.org/${this.id}?200x200`
    }

    createCard = () => {
        const card = document.createElement('div')
        const pic = document.createElement('img')
        const h2 = document.createElement('h2')
        const p = document.createElement('p')
        pic.setAttribute('src', this.image)
        h2.append(this.name)
        p.append(this.email)
        card.append(pic, h2, p)
        card.setAttribute('id', this.id)
        card.classList.add('card')
        return card
    }
}
const root = document.getElementById('root');

const getData = (e) => {
    e.preventDefault()
    fetch(`/robots?search=${e.target.search.value}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            root.innerHTML = ''
            data.forEach(robot => addCard(robot))
        })
}

const addCard = (robot) => {
    const newRobot = new Robot(robot)
    root.append(newRobot.createCard())
}