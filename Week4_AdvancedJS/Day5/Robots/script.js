const robots = [
    {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        image: 'https://robohash.org/1?200x200'
    },
    {
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
        email: 'Shanna@melissa.tv',
        image: 'https://robohash.org/2?200x200'
    },
    {
        id: 3,
        name: 'Clementine Bauch',
        username: 'Samantha',
        email: 'Nathan@yesenia.net',
        image: 'https://robohash.org/3?200x200'
    },
    {
        id: 4,
        name: 'Patricia Lebsack',
        username: 'Karianne',
        email: 'Julianne.OConner@kory.org',
        image: 'https://robohash.org/4?200x200'
    },
    {
        id: 5,
        name: 'Chelsey Dietrich',
        username: 'Kamren',
        email: 'Lucio_Hettinger@annie.ca',
        image: 'https://robohash.org/5?200x200'
    },
    {
        id: 6,
        name: 'Mrs. Dennis Schulist',
        username: 'Leopoldo_Corkery',
        email: 'Karley_Dach@jasper.info',
        image: 'https://robohash.org/6?200x200'
    },
    {
        id: 7,
        name: 'Kurtis Weissnat',
        username: 'Elwyn.Skiles',
        email: 'Telly.Hoeger@billy.biz',
        image: 'https://robohash.org/7?200x200'
    },
    {
        id: 8,
        name: 'Nicholas Runolfsdottir V',
        username: 'Maxime_Nienow',
        email: 'Sherwood@rosamond.me',
        image: 'https://robohash.org/8?200x200'
    },
    {
        id: 9,
        name: 'Glenna Reichert',
        username: 'Delphine',
        email: 'Chaim_McDermott@dana.io',
        image: 'https://robohash.org/9?200x200'
    },
    {
        id: 10,
        name: 'Clementina DuBuque',
        username: 'Moriah.Stanton',
        email: 'Rey.Padberg@karina.biz',
        image: 'https://robohash.org/10?200x200'
    }
];

(() => {
    const createCard = ({ id, name, username, email, image }) => {
        const card = document.createElement('div')
        const pic = document.createElement('img')
        const h2 = document.createElement('h2')
        const p = document.createElement('p')
        pic.setAttribute('src', image)
        h2.append(name)
        p.append(email)
        card.append(pic, h2, p)
        card.setAttribute('id', id)
        card.classList.add('card')
        section.append(card)
    }

    const onSearch = (e) => {
        const isRelevantForSearch = (robot) => {
            return robot.name.toLowerCase().indexOf(e.target.value) !== -1
        }

        const hideCard = (id) => {
            const card = document.getElementById(id)
            card.style.display = 'none'
        }

        const showCard = (id) => {
            const card = document.getElementById(id)
            card.style.display = 'flex'
        }
        const relevant = robots.filter(robot => isRelevantForSearch(robot))
        const irrellevant = robots.filter(robot => !isRelevantForSearch(robot))

        error.style.display = relevant.length ? 'none' : 'block'

        irrellevant.forEach(robot => hideCard(robot.id))
        relevant.forEach(robot => showCard(robot.id))
    }

    const createNav = () => {
        const nav = document.createElement('nav')
        nav.classList.add('nav')
        const logo = document.createElement('h1')
        const search = document.createElement('input')
        logo.append('robofriends')
        search.setAttribute('type', 'text')
        search.setAttribute('placeholder', 'Search')
        search.addEventListener('input', onSearch)
        nav.append(logo, search)
        return nav
    }

    const createSection = () => {
        const section = document.createElement('section')
        section.classList.add('section')
        return section
    }

    const createError = () => {
        const error = document.createElement('p')
        error.style.display = 'none'
        error.classList.add('error')
        error.innerText = 'No match found'
        return error
    }

    const root = document.getElementById('root')
    const section = createSection()
    const nav = createNav()
    const error = createError()
    root.append(nav, section, error)
    robots.forEach(createCard)
    createNav()
})()