const getData = () => {
    fetch('http://localhost:3000/user')
        .then(res => res.json())
        .then(data => displayData(data))
}

const displayData = ({firstname, lastname}) => {
    document.getElementById('root').innerHTML = `<h1>${firstname}</h1><p>${lastname}</p>`
}

getData()