const urls = [
    "https://jsonplaceholder.tyicode.com/users",
    "https://jsonplaceholder.typicode.com/posts",
    "https://jsonplaceholder.typicode.com/albums"
];

const getData = async function () {

    const [users, posts, albums] = await Promise.all(urls.map(async (url) => {
        try {
            const res = await fetch(url)
            const data = await res.json()
            return data
        } catch (error) {
            console.log('ooops')
        }

    }));

    console.log('users', users);
    console.log('posta', posts);
    console.log('albums', albums);

}

getData()