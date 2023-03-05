import UserFavouriteColors from './UserFavouriteColors'
import Exercise4 from './Exercise4';

function App() {
  const myelement = <h1>I Love JSX!</h1>;
  const sum = 5 + 5;

  const user = {
    firstName: 'Bob',
    lastName: 'Dylan',
    favAnimals : ['Horse','Turtle','Elephant','Monkey']
  };

  return (
    <div className="App">
      {myelement}
      React is {sum} times better with JSX
      <h3>{user.firstName}</h3>
      <h3>{user.lastName}</h3>
      <UserFavouriteColors favAnimals={user.favAnimals}/>
      <Exercise4 />
    </div>
  );
}

export default App;
