// fetch("https://www.swapi.tech/api/starships/9/")
//     .then(response => response.json())
//     .then(objectStarWars => console.log(objectStarWars.result));


(async ()=>{
    const res = await fetch("https://www.swapi.tech/api/starships/9/")
    const objectStarWars = await res.json()
    console.log(objectStarWars.result)
})()