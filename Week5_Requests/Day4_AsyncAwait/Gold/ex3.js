const urls = [
    "https://jsonplaceholder.typicode.com/users",
    "https://jsonplaceholder.typicode.com/posts",
    "https://jsonplaceholder.typicode.com/albums"
];

const getData = async function () {
    const [users, posts, albums] = await Promise.all(urls.map(async (url) => {
        const res = await fetch(url)
        const data = await res.json()
        return data
    }));

    console.log('users', users);
    console.log('posta', posts);
    console.log('albums', albums);
}

getData()
// Modify the function above. Add async await in place of the following line:
// fetch(url).then(resp => resp.json())
// So there shouldn’t be any .then() calls anymore!
// Don’t get discouraged… this is a really tough one…