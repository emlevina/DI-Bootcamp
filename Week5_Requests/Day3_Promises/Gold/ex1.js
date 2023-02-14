const urls = [
    'https://www.swapi.tech/api/people/1',
    'https://www.swapi.tech/api/people/2',
    'https://www.swapi.tech/api/people/3',
    'https://www.swapi.tech/api/people/4'
]

Promise.all(urls.map(url => {
    return fetch(url).then(res => res.json())
}))
    .then(res => res.forEach(person => console.log(person.result.properties.name)))
    .catch(err => console.log('smth went wrong'))