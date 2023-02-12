let params = new URLSearchParams(location.search);
const name = params.get('name')
const lastname = params.getAll('lastname')

document.querySelector('#output').append(`Hello, ${name} ${lastname}!`)