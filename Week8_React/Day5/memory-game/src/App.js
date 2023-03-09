import './App.css';
import Card from './components/Card';
import superHeroes from './superHeroes.json';
import { useState } from 'react';

function App() {
  const [heros, setHeros] = useState(superHeroes.superheroes)
  const [points, setPoints] = useState(0)
  const [bestScore, setBestScore] = useState(0)

  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array
  };

  const handleClick = (id) => {
    const clickedHero = heros.find(hero => hero.id === id)

    if (clickedHero.clicked === true) {
      console.log(`You already clicked ${clickedHero.name}`)

      setHeros((prevHeros) => shuffle(prevHeros.map(hero => {
        hero.clicked = false
        return hero
      })))
      if(points > bestScore) setBestScore(points)
      setPoints(0)

    } else {
      console.log(`You didn't click ${clickedHero.name} yet, cool!`)
      setHeros((prevHeros) => shuffle(prevHeros.map(hero => {
        if (hero.id === id) {
          hero.clicked = true
        }
        return hero
      })))
      setPoints((prevPoints) => prevPoints + 1)
    }

  }

  return (
    <div className="app">
      <p>BestScore: {bestScore}</p>
      <p>Points: {points}</p>
      <div className='gallery'>
        {heros.map((hero, index) => <Card hero={hero} key={hero.id} handleClick={handleClick} />)}
      </div>
    </div>
  );
}

export default App;
