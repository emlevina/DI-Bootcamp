import logo from './logo.svg';
import './App.css';
import Car from './components/Car';
import Phone from './components/Phone';
import Color from './components/Color';


function App() {
  const carinfo = {name: "Ford", model: "Mustang"};

  return (
    <div className="App">
      <Car data={carinfo}/>
      <Phone />
      <Color />
    </div>
  );
}

export default App;
