import './App.css';
import TheComponent from './components/TheComponent';
import { data } from './data';

function App() {
  return (
    <div className="App">
      {data.map(item => <TheComponent icon={item.icon} label={item.label} number={item.number} key={item.id} />)}
    </div>
  );
}

export default App;
