import './App.css';
import FirstName from './components/FirstName';
import SecondName from './components/SecondName';
import ClickBtn from './components/ClickBtn';
import Results from './components/Results';
import { useSelector } from 'react-redux';

function App() {
  const color = useSelector(state => state.color)
  return (
    <div className="App" style={{ background: color }}>
      <form onSubmit={(e) => e.preventDefault()} className='form'>
        <FirstName />
        <SecondName />
        <ClickBtn />
      </form>
      <Results />
    </div>
  );
}

export default App;
